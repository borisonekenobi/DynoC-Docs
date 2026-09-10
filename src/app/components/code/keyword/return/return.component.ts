import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'return',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './return.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './return.component.css'
})
export class ReturnComponent {

}
