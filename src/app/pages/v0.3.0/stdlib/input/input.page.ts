import {Component} from '@angular/core';
import {
	InputComponent,
} from '../../../../components/code/function/input/input.component';
import {RouterLink} from '@angular/router';

@Component({
	imports: [InputComponent, RouterLink],
	selector: 'app-input',
	styleUrl: './input.page.css',
	templateUrl: './input.page.html',
})
export class InputPage {
}
