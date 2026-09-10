import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'number',
  imports: [],
  templateUrl: './number.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './number.component.css',
})
export class NumberComponent {
}
