import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowPage } from './control-flow.page';

describe('ControlFlowPage', () => {
  let component: ControlFlowPage;
  let fixture: ComponentFixture<ControlFlowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
