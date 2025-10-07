import {SidebarElement} from '../../sidebar-element';

export abstract class Version {
  static sidebarLayout: SidebarElement[];
  available!: boolean;
  version!: string;
  sidebarLayout!: SidebarElement[];
}
