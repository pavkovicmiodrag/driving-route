import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SnackBarService } from '../../core/snack-bar.service';
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-routes-add',
  templateUrl: './routes-add.component.html',
  styleUrls: ['./routes-add.component.scss']
})
export class RoutesAddComponent {
  public errorMessages$ = new Subject();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private router: Router,
    private service: RoutesService,
    private snackBar: SnackBarService
  ) {}

  onSaveRoute(values) {
    this.service.addRoute(values)
    .pipe(takeUntil(this.destroyed$));
    this.router.navigate(['/routes']);
    this.snackBar.open(`Route has been successfully saved`);
  }

  onSendError(message) {
    this.errorMessages$.next(message);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
