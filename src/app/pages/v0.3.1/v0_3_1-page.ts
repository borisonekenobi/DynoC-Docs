import {Component} from '@angular/core';
import {Version} from '../version';
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
export class V0_3_1Page extends Version {
  static override sidebarLayout: SidebarElement[] = [];
  override available: boolean = false;
  override version: string = '0.3.1';
  override sidebarLayout: SidebarElement[] = V0_3_1Page.sidebarLayout;
}
