import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { RoutesAddComponent } from './routes-add/routes-add.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesListComponent
  },
  {
    path: 'add',
    component: RoutesAddComponent
  },
  {
    path: ':id',
    component: RouteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
