import {Component} from '@angular/core';
import {Version} from '../version';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {SidebarElement} from '../../../sidebar-element';

@Component({
  selector: 'app-v0.3.16',
  imports: [
    RouterOutlet, SidebarComponent],
  templateUrl: '../version.page.html',
  styleUrl: '../version.page.css',
})
export class V0_3_16Page extends Version {
  static override sidebarLayout: SidebarElement[] = [];
  override released: boolean = false;
  override version: string = '0.3.16';
  override sidebarLayout: SidebarElement[] = V0_3_16Page.sidebarLayout;
}
