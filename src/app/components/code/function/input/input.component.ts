import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FunctionComponent} from '../function.component';

@Component({
  selector: 'input-fn',
  imports: [
    FunctionComponent],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './input.component.css',
})
export class InputComponent {
}
