import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringKWComponent } from './string.component';

describe('StringComponent', () => {
  let component: StringKWComponent;
  let fixture: ComponentFixture<StringKWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringKWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringKWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
