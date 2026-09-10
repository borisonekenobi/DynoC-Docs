import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'var-kw',
  imports: [
    KeywordComponent,
  ],
  templateUrl: './var.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './var.component.css'
})
export class VarComponent {

}
