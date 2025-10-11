import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {GettingStartedPage} from './pages/getting-started/getting-started.page';
import {DocumentationPage} from './pages/documentation/documentation.page';
import {V0_3_1Page} from './pages/v0.3.1/v0_3_1-page';
import {V0_3_0Page} from './pages/v0.3.0/v0_3_0-page';
import {ExamplesPage} from './pages/examples/examples.page';
import {ContributingPage} from './pages/contributing/contributing.page';
import {
  WrongRouteComponent,
} from './pages/wrong-route/wrong-route.component';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'getting-started', component: GettingStartedPage},
  {
    path: 'documentation', component: DocumentationPage, children: [
      {path: '', redirectTo: '0.3.0', pathMatch: 'full'}, {
        path: '0.3.1',
        component: V0_3_1Page,
        children: V0_3_1Page.sidebarLayout,
      }, {
        path: '0.3.0',
        component: V0_3_0Page,
        children: V0_3_0Page.sidebarLayout,
      }],
  },
  {path: 'examples', component: ExamplesPage},
  {path: 'contributing', component: ContributingPage},
  {path: '**', component: WrongRouteComponent}];
