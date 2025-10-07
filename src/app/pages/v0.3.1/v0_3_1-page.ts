import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {SidebarElement} from '../../../sidebar-element';

@Component({
  selector: 'app-v0.3.1',
  imports: [
    RouterOutlet, SidebarComponent],
  templateUrl: '../version.page.html',
  styleUrl: '../version.page.css',
})
export class V0_3_1Page {
  static sidebarLayout: SidebarElement[] = [];
  available: boolean = false;
  version: string = '0.3.1';
  sidebarLayout: SidebarElement[] = V0_3_1Page.sidebarLayout;
}
