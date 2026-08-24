import {Component} from '@angular/core';
import {
	PrintComponent,
} from '../../../../components/code/function/print/print.component';
import {RouterLink} from '@angular/router';

@Component({
	imports: [PrintComponent, RouterLink],
	selector: 'app-print',
	styleUrl: './print.page.css',
	templateUrl: './print.page.html',
})
export class PrintPage {
}
