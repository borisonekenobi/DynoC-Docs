import {Component} from '@angular/core';
import {
  PrintLineComponent
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';
import {VarComponent} from '../../components/code/keyword/var/var.component';
import {NumberComponent} from '../../components/code/number/number.component';
import {IfComponent} from '../../components/code/keyword/if/if.component';
import {ElseComponent} from '../../components/code/keyword/else/else.component';
import {IntComponent} from '../../components/code/keyword/int/int.component';
import {
  FunctionComponent
} from '../../components/code/function/function.component';
import {
  ReturnComponent
} from '../../components/code/keyword/return/return.component';

@Component({
  selector: 'app-examples',
  imports: [
    PrintLineComponent,
    StringComponent,
    VarComponent,
    NumberComponent,
    IfComponent,
    ElseComponent,
    IntComponent,
    FunctionComponent,
    ReturnComponent,
  ],
  templateUrl: './examples.page.html',
  styleUrl: './examples.page.css',
})
export class ExamplesPage {

}
