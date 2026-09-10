import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FunctionComponent} from '../function.component';

@Component({
  selector: 'print_line',
  imports: [
    FunctionComponent],
  templateUrl: './print-line.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print-line.component.css',
})
export class PrintLineComponent {
}
