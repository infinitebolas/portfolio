import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-loader',  
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader{
  launching = false;

  constructor(private router: Router) {}

  goToHome() {
    this.launching = true;

    const el = document.querySelector('.center-body');

    if (!el) return;

    const onEnd = () => {
      el.removeEventListener('transitionend', onEnd);
      this.router.navigate(['/NevenRouinsard']);
    };

    el.addEventListener('transitionend', onEnd);
  }
}