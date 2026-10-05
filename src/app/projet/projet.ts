import { Component, Input, signal } from '@angular/core';
import { ProjetsModel } from '../Models/projets-model';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-projet',
  imports: [UpperCasePipe],
  templateUrl: './projet.html',
  styleUrl: './projet.scss',
})
export class Projet {
  @Input() projetAlone!:ProjetsModel;

  constructor(private router:Router){}

  protected flipped = signal(false);

  onViewProject(){
    this.router.navigateByUrl(`NevenRouinsard/${this.projetAlone.id}`);
  }
}
