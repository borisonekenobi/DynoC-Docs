import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FunctionComponent} from '../function.component';

@Component({
  selector: 'print',
  imports: [
    FunctionComponent],
  templateUrl: './print.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print.component.css',
})
export class PrintComponent {
}
