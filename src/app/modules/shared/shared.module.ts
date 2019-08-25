import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleMapsAutocompleteDirective } from './directives/gmaps-autocomplete/mat-google-maps-autocomplete.directive';
import { MatValidateAddressDirective } from './directives/address-validator/mat-address-validator.directive';
import { AgmDirectionModule } from 'agm-direction';

import { AgmCoreModule } from '@agm/core';
import {environment} from '../../../environments/environment';
import { RouterModule } from '@angular/router';

const googleMapsParams = {
  apiKey: environment.GOOGLE_MAPS_API_KEY,
  libraries: ['places'],
  language: 'en',
  // region: 'DE'
};

const SHARED_MODULES = [
  // It may make sense to create another module and imports/exports all of Material module into one
  // we will keep it now simple
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatInputModule,
  MatMenuModule,
  MatFormFieldModule,
  MatListModule,
  MatProgressSpinnerModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  AgmCoreModule,
  AgmDirectionModule
];

const SHARED_COMPONENTS = [
  GoogleMapsAutocompleteDirective,
  MatValidateAddressDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot(googleMapsParams),
    ...SHARED_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ],
})
export class SharedModule { }
