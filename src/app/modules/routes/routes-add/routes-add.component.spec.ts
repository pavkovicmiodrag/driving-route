import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routesAddComponent } from './routes-add.component';

describe('routesAddComponent', () => {
  let component: routesAddComponent;
  let fixture: ComponentFixture<routesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ routesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(routesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
