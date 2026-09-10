import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'true',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './true.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './true.component.css'
})
export class TrueComponent {

}
