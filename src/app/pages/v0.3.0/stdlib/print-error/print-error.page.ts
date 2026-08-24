import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
	PrintErrorComponent,
} from '../../../../components/code/function/print-error/print-error.component';

@Component({
	imports: [RouterLink, PrintErrorComponent],
	selector: 'app-print-error',
	styleUrl: './print-error.page.css',
	templateUrl: './print-error.page.html',
})
export class PrintErrorPage {
}
