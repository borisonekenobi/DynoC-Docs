import {Component} from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {
  SidebarElement, SidebarLink, SidebarRedirect,
} from '../../../sidebar-element';
import {SyntaxPage} from './syntax/syntax.page';
import {TypesPage} from './types/types.page';
import {FunctionsPage} from './functions/functions.page';
import {ControlFlowPage} from './control-flow/control-flow.page';
import {LanguageGuidePage} from './language-guide/language-guide.page';
import {StdlibPage} from './stdlib/stdlib.page';
import {PrintPage} from './print/print.page';
import {PrintLinePage} from './print-line/print-line.page';
import {PrintErrorPage} from './print-error/print-error.page';
import {InputPage} from './input/input.page';

@Component({
  selector: 'app-v0.3.0.page',
  imports: [
    SidebarComponent, RouterOutlet],
  templateUrl: '../version.page.html',
  styleUrl: '../version.page.css',
})
export class V0_3_0Page {
  static sidebarLayout: SidebarElement[] = [
    {path: '', redirectTo: 'language-guide', pathMatch: 'full'}, {
      name: 'Language Guide',
      path: 'language-guide',
      component: LanguageGuidePage,
      children: [
        {path: '', redirectTo: 'syntax', pathMatch: 'full'} as SidebarRedirect,
        {
          name: 'Syntax', path: 'syntax', component: SyntaxPage, children: [],
        } as SidebarLink,
        {
          name: 'Types', path: 'types', component: TypesPage, children: [],
        } as SidebarLink,
        {
          name: 'Functions',
          path: 'functions',
          component: FunctionsPage,
          children: [],
        } as SidebarLink,
        {
          name: 'Control Flow',
          path: 'control-flow',
          component: ControlFlowPage,
          children: [],
        } as SidebarLink],
    } as SidebarLink, {
      name: 'Standard Library',
      path: 'standard-library',
      component: StdlibPage,
      children: [
        {path: '', redirectTo: 'print', pathMatch: 'full'} as SidebarRedirect, {
          name: 'print()', path: 'print', component: PrintPage, children: [],
        } as SidebarLink, {
          name: 'print_line()',
          path: 'print_line',
          component: PrintLinePage,
          children: [],
        } as SidebarLink, {
          name: 'print_error()',
          path: 'print_error',
          component: PrintErrorPage,
          children: [],
        } as SidebarLink, {
          name: 'input()', path: 'input', component: InputPage, children: [],
        } as SidebarLink],
    } as SidebarLink];
  available: boolean = true;
  version: string = '0.3.0';
  sidebarLayout: SidebarElement[] = V0_3_0Page.sidebarLayout;
}
