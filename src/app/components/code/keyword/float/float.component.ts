import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'float',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './float.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './float.component.css'
})
export class FloatComponent {

}
