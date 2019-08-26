# DrivingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Goal
Create application that is be able to add, store and display driving routes.

## Pages
This app should have two pages:
    * Routes Landing page
At the top of the page there is a form where user can enter start and end point for required route. Below that form should be a list with previously entered routes. When user clicks on specific route you should take him to a route detail page. User is also able to delete route. 
    * Route detail page
This page should display google map view with selected route on it and display distance and travel time in driving mode.

Instructions
    1. Use Google Map APIs.
    2. Use Grunt, Gulp or Webpack to build a project. 
    3. Store data on the client side by using local storage.
    
## Remarks
* Map is set to country Germany
* TODO Currently Edit route is displaying Object instead of location name, bug to be fixed.

DEMO [https://driving-app-9fc3f.firebaseapp.com/routes]
