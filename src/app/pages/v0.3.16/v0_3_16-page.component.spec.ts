import { ComponentFixture, TestBed } from '@angular/core/testing';
import {provideRouter} from '@angular/router';

import { V0_3_16Page } from './v0_3_16-page.component';

describe('V031Page', () => {
  let component: V0_3_16Page;
  let fixture: ComponentFixture<V0_3_16Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V0_3_16Page],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(V0_3_16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
