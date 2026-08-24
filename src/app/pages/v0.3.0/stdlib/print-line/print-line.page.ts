import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
	PrintLineComponent,
} from '../../../../components/code/function/print-line/print-line.component';

@Component({
	imports: [RouterLink, PrintLineComponent],
	selector: 'app-print-line',
	styleUrl: './print-line.page.css',
	templateUrl: './print-line.page.html',
})
export class PrintLinePage {
}
