import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'false',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './false.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './false.component.css'
})
export class FalseComponent {

}
