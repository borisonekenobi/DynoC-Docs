import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'else',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './else.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './else.component.css'
})
export class ElseComponent {

}
