import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FunctionComponent} from '../function.component';

@Component({
  selector: 'print_error',
  imports: [
    FunctionComponent],
  templateUrl: './print-error.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print-error.component.css',
})
export class PrintErrorComponent {
}
