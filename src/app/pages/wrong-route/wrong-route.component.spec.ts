import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WrongRouteComponent} from './wrong-route.component';
import {provideRouter} from '@angular/router';

describe('WrongRouteComponent', () => {
  let component: WrongRouteComponent;
  let fixture: ComponentFixture<WrongRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongRouteComponent], providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WrongRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
