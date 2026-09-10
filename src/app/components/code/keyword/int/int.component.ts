import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'int',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './int.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './int.component.css'
})
export class IntComponent {

}
