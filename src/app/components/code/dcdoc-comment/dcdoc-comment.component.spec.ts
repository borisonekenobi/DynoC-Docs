import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCDocCommentComponent } from './dcdoc-comment.component';

describe('DCDocCommentComponent', () => {
  let component: DCDocCommentComponent;
  let fixture: ComponentFixture<DCDocCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCDocCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCDocCommentComponent);
    component = fixture.componentInstance;
    component.info = {
      description: 'Test description',
      params: [
        { name: 'param1', description: 'Param 1 description' },
        { name: 'param2', description: 'Param 2 description' },
      ],
      returns: 'Test return value',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
