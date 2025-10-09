import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLineComponent } from './print-line.component';

describe('PrintLineComponent', () => {
  let component: PrintLineComponent;
  let fixture: ComponentFixture<PrintLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
