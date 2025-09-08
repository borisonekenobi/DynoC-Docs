import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributingPage } from './contributing.page';

describe('ContributingPage', () => {
  let component: ContributingPage;
  let fixture: ComponentFixture<ContributingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
