import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TeamPageComponent} from "./team-page/team-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TeamPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
