import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Loader } from './loader/loader';
import { ProjetSingle } from './projet-single/projet-single';

export const routes: Routes = [
    { path: '', component: Loader },
    { path: 'NevenRouinsard', component: Accueil },
    {path: 'NevenRouinsard/:id',component:ProjetSingle},
    { path:'**', redirectTo: ''}
];
