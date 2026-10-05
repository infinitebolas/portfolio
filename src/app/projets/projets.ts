import { Component, OnInit } from '@angular/core';
import { ProjetsModel } from '../Models/projets-model';
import { ProjetsService } from '../service/projets-service';
import { Projet } from '../projet/projet';

@Component({
  selector: 'app-projets',
  imports: [Projet],
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
})
export class Projets implements OnInit{
  projets!:ProjetsModel[];

  constructor(private service:ProjetsService){}

  ngOnInit():void{
    this.projets=this.service.getProjets();
  }

}
