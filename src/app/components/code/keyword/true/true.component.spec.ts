import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueComponent } from './true.component';

describe('TrueComponent', () => {
  let component: TrueComponent;
  let fixture: ComponentFixture<TrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
