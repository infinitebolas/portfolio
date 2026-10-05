import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ProjetsModel } from '../Models/projets-model';
import { ProjetsService } from '../service/projets-service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projet-single',
  imports: [UpperCasePipe],
  templateUrl: './projet-single.html',
  styleUrl: './projet-single.scss',
})
export class ProjetSingle implements OnInit{
  projet!:ProjetsModel
  scrollToProjets:boolean=false;
  constructor(private ProjectService:ProjetsService,
              private route:ActivatedRoute,
              private router:Router){}

  ngOnInit(): void {
    this.getProject();
  }
  private getProject():void{
    const projectId = this.route.snapshot.params['id'];
    this.projet = this.ProjectService.getProjetById(projectId);
  }

  public goBack(): void {
    this.router.navigate(['/NevenRouinsard'], {
      fragment: 'projets',
      replaceUrl: true
    });
  }

}
