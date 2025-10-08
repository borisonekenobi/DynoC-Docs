import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolComponent } from './bool.component';

describe('BoolComponent', () => {
  let component: BoolComponent;
  let fixture: ComponentFixture<BoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
