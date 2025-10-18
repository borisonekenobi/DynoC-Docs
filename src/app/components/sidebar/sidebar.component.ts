import {Component, Input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
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
    '0.3.1', '0.3.0'];

  constructor(private router: Router) {
  }

  versionChange() {
    const versionElem = document.getElementById('version') as HTMLSelectElement;
    this.router.navigate([`/documentation/${versionElem.value}`]).
      then(r => {
        if (!r) {
          console.error('Navigation to selected version failed!');
        }
      });
  }
}
