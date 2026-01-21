import {Component} from '@angular/core';
import {
  PrintLineComponent
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-getting-started',
  imports: [
    PrintLineComponent,
    StringComponent,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './getting-started.page.html',
  styleUrl: './getting-started.page.css',
})
export class GettingStartedPage {

}
