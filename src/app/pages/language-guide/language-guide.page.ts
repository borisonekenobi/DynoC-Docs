import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-language-guide',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './language-guide.page.html',
  styleUrl: './language-guide.page.css'
})
export class LanguageGuidePage {

}
