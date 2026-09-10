import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
	PrintComponent,
} from '../../../../components/code/function/print/print.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-print',
  imports: [
    PrintComponent,
    RouterLink,
  ],
  templateUrl: './print.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print.page.css',
})
export class PrintPage {

}
