import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	imports: [RouterLink, RouterLinkActive],
	selector: 'app-navbar',
	styleUrl: './navbar.component.css',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
}
