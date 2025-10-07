import {Route} from '@angular/router';
import {Type} from '@angular/core';

export interface SidebarElement extends Route {
}

export interface SidebarRedirect extends SidebarElement {
  path: '';
  redirectTo: string;
  pathMatch: 'full';
}

export interface SidebarLink extends Route {
  name: string;
  path: string;
  component: Type<any>;
  children: SidebarElement[];
}
