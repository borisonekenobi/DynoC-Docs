import {Component} from '@angular/core';
import {Version} from '../version';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {SidebarElement} from '../../../sidebar-element';

@Component({
	imports: [RouterOutlet, SidebarComponent, RouterLink, RouterLinkActive],
	selector: 'app-v0.3.16',
	styleUrl: '../version.page.css',
	templateUrl: '../version.page.html',
})
export class V0_3_16Page extends Version {
	public static override sidebarLayout: SidebarElement[] = [];
	public override released: boolean = false;
	public override version: string = '0.3.16';
	public override sidebarLayout: SidebarElement[] = V0_3_16Page.sidebarLayout;
}
