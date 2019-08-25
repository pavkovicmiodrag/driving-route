import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Route } from "../routes.model";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RoutesService } from "../routes.service";
import { Router } from "@angular/router";
import { SnackBarService } from "../../core/snack-bar.service";

@Component({
  selector: "app-routes-list",
  templateUrl: "./routes-list.component.html",
  styleUrls: ["./routes-list.component.scss"]
})
export class RoutesListComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  routes: Route[];
  isLoading$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private service: RoutesService,
    private snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.routes = this.service.getRoutes();
    this.isLoading$ = this.service.isLoading$;
  }

  onDeleteRoute(route: Route) {
    this.service.deleteRoute(route.id)
    .pipe(takeUntil(this.destroyed$))
    .subscribe({
      next: x => this.routes = this.service.getRoutes(),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    this.router.navigate(["/routes"]);
    this.snackBar.open(`Route has been successfully deleted`);
  }

  editRoute(route: Route) {
    const routeId = route ? route.id : null;
    this.router.navigate(["/routes/", routeId]);
    this.service.isEdit(true);
  }

  viewRoute(route: Route) {
    const routeId = route ? route.id : null;
    this.router.navigate(["/routes/", routeId]);
    this.service.isEdit(false);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
