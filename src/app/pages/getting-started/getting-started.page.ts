import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {
	PrintLineComponent,
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';

@Component({
	imports: [
		PrintLineComponent,
		StringComponent,
		RouterLinkActive,
		RouterLink],
	selector: 'app-getting-started',
	styleUrl: './getting-started.page.css',
	templateUrl: './getting-started.page.html',
})
export class GettingStartedPage {
}
