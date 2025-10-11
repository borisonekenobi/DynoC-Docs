import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputPage} from './input.page';
import {provideRouter} from '@angular/router';

describe('InputPage', () => {
  let component: InputPage;
  let fixture: ComponentFixture<InputPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPage], providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
