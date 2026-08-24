import {Component} from '@angular/core';
import {FunctionComponent} from '../function.component';

@Component({
	imports: [FunctionComponent],
	selector: 'print',
	styleUrl: './print.component.css',
	templateUrl: './print.component.html',
})
export class PrintComponent {
}
