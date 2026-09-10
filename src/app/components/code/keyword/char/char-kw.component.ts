import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'char-kw',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './char-kw.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './char-kw.component.css'
})
export class CharKWComponent {

}
