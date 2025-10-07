import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V0_3_1Page } from './v0_3_1-page';

describe('V031Page', () => {
  let component: V0_3_1Page;
  let fixture: ComponentFixture<V0_3_1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V0_3_1Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V0_3_1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
