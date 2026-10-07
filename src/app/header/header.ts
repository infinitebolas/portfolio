import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    CommonModule
  ],
  
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header{
  isLight = false;
  menuOpen = false; 


  constructor(public router: Router) {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.updateBodyScroll();
  }
  closeMenu() {
    this.menuOpen = false;
    this.updateBodyScroll();
  }

private updateBodyScroll() {
    const body = document.body;
    const html = document.documentElement;

    if (this.menuOpen) {
      html.classList.add('no-scroll')
      body.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    }
  }
  switchLight() {
    document.body.classList.toggle('light');
    document.getElementById("header")?.classList.toggle('light');
    this.isLight = !this.isLight;
  }

public scrollTo(id: string) {
  this.closeMenu();

  this.router.navigate(['/NevenRouinsard'], {
    fragment: id
  });
}

   scrollToTop() {
    this.closeMenu();

    this.router.navigate(['/NevenRouinsard']).then(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}
