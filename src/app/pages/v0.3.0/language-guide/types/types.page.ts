import {Component} from '@angular/core';
import {
  NumberComponent,
} from '../../../../components/code/number/number.component';
import {
  CommentComponent,
} from '../../../../components/code/comment/comment.component';
import {
  StringComponent,
} from '../../../../components/code/string/string.component';
import {CharComponent} from '../../../../components/code/char/char.component';
import {
  IntComponent,
} from '../../../../components/code/keyword/int/int.component';
import {
  FloatComponent,
} from '../../../../components/code/keyword/float/float.component';
import {IfComponent} from '../../../../components/code/keyword/if/if.component';
import {
  StringKWComponent,
} from '../../../../components/code/keyword/string/string.component';
import {
  CharKWComponent,
} from '../../../../components/code/keyword/char/char-kw.component';
import {
  BoolComponent,
} from '../../../../components/code/keyword/bool/bool.component';
import {
  TrueComponent,
} from '../../../../components/code/keyword/true/true.component';
import {
  PrintLineComponent
} from '../../../../components/code/function/print-line/print-line.component';

@Component({
  selector: 'app-types',
  imports: [
    NumberComponent,
    CommentComponent,
    IntComponent,
    FloatComponent,
    BoolComponent,
    TrueComponent,
    IfComponent,
    StringComponent,
    CharKWComponent,
    CharComponent,
    StringKWComponent,
    PrintLineComponent,
  ],
  templateUrl: './types.page.html',
  styleUrl: './types.page.css',
})
export class TypesPage {

}
