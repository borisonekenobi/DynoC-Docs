import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'if',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './if.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './if.component.css'
})
export class IfComponent {

}
