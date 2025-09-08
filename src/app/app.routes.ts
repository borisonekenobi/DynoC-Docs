import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {LanguageGuidePage} from './pages/language-guide/language-guide.page';
import {SyntaxPage} from './pages/syntax/syntax.page';
import {TypesPage} from './pages/types/types.page';
import {FunctionsPage} from './pages/functions/functions.page';
import {ControlFlowPage} from './pages/control-flow/control-flow.page';
import {StdlibPage} from './pages/stdlib/stdlib.page';
import {DocumentationPage} from './pages/documentation/documentation.page';
import {PrintPage} from './pages/print/print.page';
import {PrintLinePage} from './pages/print-line/print-line.page';
import {PrintErrorPage} from './pages/print-error/print-error.page';
import {InputPage} from './pages/input/input.page';
import {ExamplesPage} from './pages/examples/examples.page';
import {ContributingPage} from './pages/contributing/contributing.page';
import {GettingStartedPage} from './pages/getting-started/getting-started.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'getting-started', component: GettingStartedPage},
  {
    path: 'documentation', component: DocumentationPage, children: [
      {path: '', redirectTo: 'language-guide', pathMatch: 'full'}, {
        path: 'language-guide', component: LanguageGuidePage, children: [
          {path: '', redirectTo: 'syntax', pathMatch: 'full'},
          {path: 'syntax', component: SyntaxPage},
          {path: 'types', component: TypesPage},
          {path: 'functions', component: FunctionsPage},
          {path: 'control-flow', component: ControlFlowPage}],
      }, {
        path: 'standard-library', component: StdlibPage, children: [
          {path: '', redirectTo: 'print', pathMatch: 'full'},
          {path: 'print', component: PrintPage},
          {path: 'print_line', component: PrintLinePage},
          {path: 'print_error', component: PrintErrorPage},
          {path: 'input', component: InputPage}],
      }],
  },
  {path: 'examples', component: ExamplesPage},
  {path: 'contributing', component: ContributingPage}];
