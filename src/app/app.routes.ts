import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {GettingStartedPage} from './pages/getting-started/getting-started.page';
import {DocumentationPage} from './pages/documentation/documentation.page';
import {V0_3_16Page} from './pages/v0.3.16/v0_3_16-page.component';
import {V0_3_0Page} from './pages/v0.3.0/v0_3_0-page';
import {DownloadsPage} from './pages/downloads/downloads.page';
import {ExamplesPage} from './pages/examples/examples.page';
import {ContributingPage} from './pages/contributing/contributing.page';
import {WrongRouteComponent} from './pages/wrong-route/wrong-route.component';

export const routes: Routes = [
  {path: '', title: 'Home | DynoC Documentation', component: HomePage},
  {path: 'getting-started', title: 'Getting Started | DynoC Documentation', component: GettingStartedPage},
  {
    path: 'documentation', title: 'Documentation | DynoC Documentation', component: DocumentationPage, children: [
      {path: '', redirectTo: '0.3.0', pathMatch: 'full'}, {
        path: '0.3.16',
        title: 'v0.3.16 Documentation | DynoC Documentation',
        component: V0_3_16Page,
        children: V0_3_16Page.sidebarLayout,
      }, {
        path: '0.3.0',
        title: 'v0.3.0 Documentation | DynoC Documentation',
        component: V0_3_0Page,
        children: V0_3_0Page.sidebarLayout,
      }],
  },
  {path: 'downloads', title: 'Downloads | DynoC Documentation', component: DownloadsPage},
  {path: 'examples', title: 'Examples | DynoC Documentation', component: ExamplesPage},
  {path: 'contributing', title: 'Contributing | DynoC Documentation', component: ContributingPage},
  {path: '**', title: '404 Not Found | DynoC Documentation', component: WrongRouteComponent}];
