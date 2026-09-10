import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'for',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './for.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './for.component.css'
})
export class ForComponent {

}
