import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
})
export class App {
}
