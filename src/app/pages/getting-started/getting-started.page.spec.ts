import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';

import {GettingStartedPage} from './getting-started.page';

describe('GettingStartedPage', () => {
  let component: GettingStartedPage;
  let fixture: ComponentFixture<GettingStartedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingStartedPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GettingStartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
