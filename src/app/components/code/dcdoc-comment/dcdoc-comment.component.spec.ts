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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
