import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageGuidePage} from './language-guide.page';

describe('LanguageGuidePage', () => {
  let component: LanguageGuidePage;
  let fixture: ComponentFixture<LanguageGuidePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageGuidePage],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
