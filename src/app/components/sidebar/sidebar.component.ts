import {Component, inject, input, InputSignal} from '@angular/core';
import {SidebarElement} from '../../../sidebar-element';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	imports: [RouterLink, RouterLinkActive],
	selector: 'app-sidebar',
	styleUrl: './sidebar.component.css',
	templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
	public readonly version: InputSignal<string> = input.required();
	public readonly layout: InputSignal<SidebarElement[]> = input.required();

	protected readonly versions: string[] = ['0.3.16', '0.3.0'];

	private readonly router: Router = inject(Router);

	protected versionChange(): void {
		const versionElem = document.getElementById(
			'version') as HTMLSelectElement;
		this.router.navigate([`/documentation/${versionElem.value}`]).
			then((r) => {
				if (!r) {
					console.error('Navigation to selected version failed!');
				}
			});
	}
}
