import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { SnackBarService } from "../../core/snack-bar.service";
import { RoutesService } from "../routes.service";
import { Route } from "../routes.model";

@Component({
  selector: "app-route-details",
  templateUrl: "./route-details.component.html",
  styleUrls: ["./route-details.component.scss"]
})
export class RouteDetailsComponent implements OnInit {
  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any;
  public destination: any;
  public errorMessages$ = new Subject();
  public route$: Route;
  public isEdit = true;

  private id: string;

  constructor(
    private route: ActivatedRoute,
    private service: RoutesService,
    private snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    this.route$ = this.service.getRoute(id);
    Object.assign(this.route, this.service.getRoute(id));
    this.isEdit = this.service.edit$.getValue();
    this.getDirection();
  }

  onUpdateRoute(newRoute: Route) {
    this.service.updateRoute(this.route$, newRoute);
    this.router.navigate(["/routes"]);
    this.snackBar.open(`Route has been successfully updated`);
  }

  sendError(message) {
    this.errorMessages$.next(message);
  }

  getDirection() {
    this.origin = {
      lat: this.route$.start.latitude,
      lng: this.route$.start.longitude
    };
    this.destination = {
      lat: this.route$.end.latitude,
      lng: this.route$.end.longitude
    };
  }
}
