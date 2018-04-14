import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectLayoutModule } from '../project-layout/project-layout.module';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent
  },
  {
    path: ':id', loadChildren: '../project-layout/project-layout.module#ProjectLayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }