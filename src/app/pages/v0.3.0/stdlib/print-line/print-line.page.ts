import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
	PrintLineComponent,
} from '../../../../components/code/function/print-line/print-line.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-print-line',
  imports: [
    PrintLineComponent,
    RouterLink,
  ],
  templateUrl: './print-line.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print-line.page.css',
})
export class PrintLinePage {

}
