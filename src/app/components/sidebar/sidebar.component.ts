import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SidebarElement} from '../../../sidebar-element';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({required: true}) version!: string;
  @Input({required: true}) layout!: SidebarElement[];
  versions: string[] = [
    '0.3.1',
    '0.3.0'
  ];

  versionChange() {
    const versionElem = document.getElementById('version') as HTMLSelectElement;
    window.location.href = `/documentation/${versionElem.value}`;
  }
}
