import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { createRoute, createLocation, Route, Location} from '../routes.model';
import PlaceResult = google.maps.places.PlaceResult;
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {
  routeForm: FormGroup;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;

  startLocation: Location;
  endLocation: Location;
  @Input()
  route;

  @Output()
  saveRoute = new EventEmitter();

  @Output()
  sendError = new EventEmitter();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
    this.startLocation = Object.assign({});
    this.endLocation = Object.assign({});
    if (this.route) {
      this.routeForm.patchValue(this.route);
    }
  }

  createForm() {
    this.routeForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      description: [''],
      latitude: [this.latitude]
    });
  }

  addRoute() {
    if (this.routeForm.valid) {
      const result: Route = Object.assign({});
      result.start = this.startLocation;
      result.end = this.endLocation;
      result.description = this.routeForm.get('description').value;
      const route = createRoute(result);
      this.saveRoute.emit(route);
    } else {
      this.sendError.emit('Please fill all required fields');
    }
  }

  cancel() {
    this.router.navigateByUrl('/routes');
  }

  onAutocompleteSelected(result: PlaceResult, isStart: boolean) {
    if (isStart) {
      this.startLocation.formatted_address = result.formatted_address;
      this.startLocation.name = result.name;
    } else {
      this.endLocation.formatted_address = result.formatted_address;
      this.endLocation.name = result.name;
    }

    console.log('onAutocompleteSelected: ', this.routeForm.value, 'Result ::', result);
  }

  onLocationSelected(location: Location, isStart: boolean) {
    if (isStart) {
      this.startLocation.latitude = location.latitude;
      this.startLocation.longitude = location.longitude;
    } else {
      this.endLocation.latitude = location.latitude;
      this.endLocation.longitude = location.longitude;
    }
  }

}
