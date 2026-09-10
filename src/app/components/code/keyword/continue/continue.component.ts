import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'continue',
  imports: [
    KeywordComponent],
  templateUrl: './continue.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './continue.component.css',
})
export class ContinueComponent {
}
