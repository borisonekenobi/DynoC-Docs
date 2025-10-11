import {Component} from '@angular/core';
import {
  PrintComponent
} from '../../../../components/code/function/print/print.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-print',
  imports: [
    PrintComponent,
    RouterLink,
  ],
  templateUrl: './print.page.html',
  styleUrl: './print.page.css',
})
export class PrintPage {

}
