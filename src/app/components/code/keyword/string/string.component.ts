import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'string-kw',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './string.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './string.component.css'
})
export class StringKWComponent {

}
