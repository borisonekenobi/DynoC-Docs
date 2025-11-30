import {SidebarElement} from '../../sidebar-element';

export abstract class Version {
  static sidebarLayout: SidebarElement[];
  released!: boolean;
  version!: string;
  sidebarLayout!: SidebarElement[];
}
