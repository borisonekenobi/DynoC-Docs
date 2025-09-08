import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-documentation',
  imports: [
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './documentation.page.html',
  styleUrl: './documentation.page.css'
})
export class DocumentationPage {

}
