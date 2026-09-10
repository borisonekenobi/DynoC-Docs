import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'break',
  imports: [
    KeywordComponent],
  templateUrl: './break.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './break.component.css',
})
export class BreakComponent {
}
