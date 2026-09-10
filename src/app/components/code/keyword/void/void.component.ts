import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'void',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './void.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './void.component.css'
})
export class VoidComponent {

}
