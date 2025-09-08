import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPage } from './print.page';

describe('PrintPage', () => {
  let component: PrintPage;
  let fixture: ComponentFixture<PrintPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
