import {ChangeDetectionStrategy, Component} from '@angular/core';
import {KeywordComponent} from '../keyword.component';

@Component({
  selector: 'exit',
  imports: [
    KeywordComponent],
  templateUrl: './exit.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exit.component.css',
})
export class ExitComponent {
}
