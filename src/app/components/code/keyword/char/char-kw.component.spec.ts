import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharKWComponent } from './char-kw.component';

describe('CharKWComponent', () => {
  let component: CharKWComponent;
  let fixture: ComponentFixture<CharKWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharKWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharKWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
