import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitComponent } from './exit.component';

describe('ExitComponent', () => {
  let component: ExitComponent;
  let fixture: ComponentFixture<ExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
