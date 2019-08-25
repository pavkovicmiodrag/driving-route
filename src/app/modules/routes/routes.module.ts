import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { SharedModule } from '../shared/shared.module';
import { RoutesAddComponent } from './routes-add/routes-add.component';
import { RouteFormComponent } from './route-form/route-form.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedModule
  ],
  declarations: [RoutesListComponent, RouteDetailsComponent, RoutesAddComponent, RouteFormComponent],
})
export class RoutesModule { }
