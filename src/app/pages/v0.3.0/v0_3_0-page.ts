import {Component} from '@angular/core';
import {Version} from '../version';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {
  SidebarElement, SidebarLink, SidebarRedirect,
} from '../../../sidebar-element';
import {SyntaxPage} from './language-guide/syntax/syntax.page';
import {TypesPage} from './language-guide/types/types.page';
import {
  VariablesAndScopePage,
} from './language-guide/variables-and-scope/variables-and-scope.page';
import {FunctionsPage} from './language-guide/functions/functions.page';
import {ControlFlowPage} from './language-guide/control-flow/control-flow.page';
import {OperatorsPage} from './language-guide/operators/operators.page';
import {LanguageGuidePage} from './language-guide/language-guide.page';
import {StdlibPage} from './stdlib/stdlib.page';
import {PrintPage} from './stdlib/print/print.page';
import {PrintLinePage} from './stdlib/print-line/print-line.page';
import {PrintErrorPage} from './stdlib/print-error/print-error.page';
import {InputPage} from './stdlib/input/input.page';

@Component({
  selector: 'app-v0.3.0.page',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: '../version.page.html',
  styleUrl: '../version.page.css',
})
export class V0_3_0Page extends Version {
  static override sidebarLayout: SidebarElement[] = [
    {path: '', redirectTo: 'language-guide', pathMatch: 'full'}, {
      name: 'Language Guide',
      path: 'language-guide',
      component: LanguageGuidePage,
      children: [
        {path: '', redirectTo: 'syntax', pathMatch: 'full'} as SidebarRedirect,
        {
          name: 'Syntax Overview',
          path: 'syntax',
          component: SyntaxPage,
          children: [],
        } as SidebarLink,
        {
          name: 'Types', path: 'types', component: TypesPage, children: [],
        } as SidebarLink,
        {
          name: 'Variables & Scope',
          path: 'variables-and-scope',
          component: VariablesAndScopePage,
          children: [],
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
        } as SidebarLink,
        {
          name: 'Operators',
          path: 'operators',
          component: OperatorsPage,
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
  override available: boolean = true;
  override version: string = '0.3.0';
  override sidebarLayout: SidebarElement[] = V0_3_0Page.sidebarLayout;
}
