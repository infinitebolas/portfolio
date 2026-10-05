import { CommonModule} from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Contact } from "../contact/contact";
import { Competences } from "../competences/competences";
import { Certifications } from '../certifications/certifications';
import { Projets } from '../projets/projets';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, Contact, Competences, Certifications,Projets],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil implements AfterViewInit{
  private isProgrammaticScroll = false;

  constructor(private router: Router) {}
  @ViewChild('photoRef') photo!: ElementRef;

  ngAfterViewInit(): void {
    this.setupRouterTracking();
    this.setupScrollTracking();
    

    const ANGLE = 45;
    const element = this.photo.nativeElement;

    element.addEventListener('mouseout', () => {
      element.style.transform =
        'perspective(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
      element.style.transition = 'all 0.25s linear';
    });

    element.addEventListener('mousemove', (e: MouseEvent) => {
      const w = element.clientWidth;
      const h = element.clientHeight;

      const y = ((e.offsetX - w * 0.5) / w) * ANGLE;
      const x = ((e.offsetY - h * 0.5) / h) * ANGLE;

      element.style.transform =
        `perspective(600px) rotateX(${-x}deg) rotateY(${y}deg)`;
    });
  }

  

  private setupRouterTracking(): void {

  this.router.events.subscribe(event => {

    if (event instanceof NavigationStart) {

      // Navigation vers une section OU retour vers le haut
      if (
        event.url.includes('#') ||
        event.url === '/accueil'
      ) {
        this.isProgrammaticScroll = true;
      }
    }
  });

  window.addEventListener('scrollend', () => {
    this.isProgrammaticScroll = false;
  });
}

  private setupScrollTracking(): void {
  const sections = [
    'competences',
    'projets',
    'certifications',
    'contact'
  ];

  let ticking = false;

  window.addEventListener('scroll', () => {

    if (this.isProgrammaticScroll) {
      return;
    }

    if (ticking) {
      return;
    }

    ticking = true;

    requestAnimationFrame(() => {

      const scrollPosition = window.scrollY;

      const triggerPosition =
        scrollPosition + window.innerHeight * 0.4;

      let currentSection: string | null = null;

      for (const id of sections) {

        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        if (element.offsetTop <= triggerPosition) {
          currentSection = id;
        }
      }

      const currentFragment = this.router.url.split('#')[1];

      if (!currentSection) {

        if (currentFragment) {
          this.router.navigate([], {
            fragment: undefined,
            replaceUrl: true
          });
        }

      } else if (currentFragment !== currentSection) {

        this.router.navigate([], {
          fragment: currentSection,
          replaceUrl: true
        });
      }

      ticking = false;
    });
  });
}
}