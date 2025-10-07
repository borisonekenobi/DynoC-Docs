import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrintErrorPage} from './print-error.page';

describe('PrintErrorPage', () => {
  let component: PrintErrorPage;
  let fixture: ComponentFixture<PrintErrorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintErrorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
