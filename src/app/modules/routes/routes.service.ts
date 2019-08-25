import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Route } from './routes.model';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() {
    if (localStorage.getItem(this.STORAGE_KEY) === null || localStorage.getItem(this.STORAGE_KEY) === undefined) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
  }

  public isLoading$ = new BehaviorSubject<boolean>(true);
  public  edit$ = new BehaviorSubject<boolean>(false);
  // key that is used to access the data in local storageconst this.STORAGE_KEY = 'routes';
  public STORAGE_KEY = "routes";
  private locator = (p: Route, id: string) => p.id === id;

  getRoute(id: string): Route {
    const routes = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    const route = routes.find(p =>  this.locator(p, id));
    return route;
  }


  getRoutes(): Route[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY));
  }

  addRoute(newRoute: Route): Observable<Route> {
    const routes = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    routes.push(newRoute);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(routes));
    return new Observable((observer) => {
        // observable execution
        observer.next(routes);
        observer.complete();
      });

  }

  deleteRoute(id: string):  Observable<Route> {
    const routes = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id === id) {
        routes.splice(i, 1);
      }
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(routes));
    return new Observable((observer) => {
        // observable execution
        observer.next(routes);
        observer.complete();
      });
  }

  updateRoute(oldRoute: Route, newRoute: Route) {
    const routes = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id === oldRoute.id) {
        routes[i] = newRoute;
      }
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(routes));
  }

  isEdit(edit: boolean) {
    this.edit$.next(edit);
  }
}
