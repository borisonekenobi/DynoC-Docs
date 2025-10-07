import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordComponent } from './keyword.component';

describe('CodeKeywordComponent', () => {
  let component: KeywordComponent;
  let fixture: ComponentFixture<KeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
