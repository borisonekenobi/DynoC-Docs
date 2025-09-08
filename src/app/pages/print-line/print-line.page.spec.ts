import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLinePage } from './print-line.page';

describe('PrintLinePage', () => {
  let component: PrintLinePage;
  let fixture: ComponentFixture<PrintLinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintLinePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintLinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
