import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyntaxPage} from './syntax.page';
import {provideRouter} from '@angular/router';

describe('SyntaxPage', () => {
  let component: SyntaxPage;
  let fixture: ComponentFixture<SyntaxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyntaxPage], providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
