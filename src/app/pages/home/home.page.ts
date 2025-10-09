import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ForComponent} from '../../components/code/keyword/for/for.component';
import {IntComponent} from '../../components/code/keyword/int/int.component';
import {NumberComponent} from '../../components/code/number/number.component';
import {
  PrintLineComponent
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';

@Component({
  selector: 'app-home', imports: [
    RouterLink,
    ForComponent,
    IntComponent,
    NumberComponent,
    PrintLineComponent,
    StringComponent,
  ], templateUrl: './home.page.html', styleUrl: './home.page.css',
})
export class HomePage {

}
