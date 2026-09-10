import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
	PrintErrorComponent,
} from '../../../../components/code/function/print-error/print-error.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-print-error',
  imports: [
    PrintErrorComponent,
    RouterLink,
  ],
  templateUrl: './print-error.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './print-error.page.css',
})
export class PrintErrorPage {

}
