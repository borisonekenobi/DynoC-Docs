import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseComponent } from './else.component';

describe('ElseComponent', () => {
  let component: ElseComponent;
  let fixture: ComponentFixture<ElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
