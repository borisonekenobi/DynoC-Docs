import {Component} from '@angular/core';
import {
  NumberComponent,
} from '../../../../components/code/number/number.component';
import {
  FunctionComponent,
} from '../../../../components/code/function/function.component';
import {
  StringComponent,
} from '../../../../components/code/string/string.component';
import {
  CommentComponent,
} from '../../../../components/code/comment/comment.component';
import {CharComponent} from '../../../../components/code/char/char.component';
import {
  DCDocCommentComponent,
} from '../../../../components/code/dcdoc-comment/dcdoc-comment.component';
import {
  IntComponent
} from '../../../../components/code/keyword/int/int.component';
import {
  FloatComponent
} from '../../../../components/code/keyword/float/float.component';
import {IfComponent} from '../../../../components/code/keyword/if/if.component';
import {
  ElseComponent
} from '../../../../components/code/keyword/else/else.component';
import {
  VarComponent
} from '../../../../components/code/keyword/var/var.component';
import {
  StringKWComponent
} from '../../../../components/code/keyword/string/string.component';
import {
  ReturnComponent
} from '../../../../components/code/keyword/return/return.component';
import {
  CharKWComponent
} from '../../../../components/code/keyword/char/char-kw.component';
import {
  VoidComponent
} from '../../../../components/code/keyword/void/void.component';
import {
  ForComponent
} from '../../../../components/code/keyword/for/for.component';
import {
  WhileComponent
} from '../../../../components/code/keyword/while/while.component';
import {
  PrintLineComponent
} from '../../../../components/code/function/print-line/print-line.component';
import {
  PrintComponent
} from '../../../../components/code/function/print/print.component';
import {
  PrintErrorComponent
} from '../../../../components/code/function/print-error/print-error.component';
import {
  InputComponent
} from '../../../../components/code/function/input/input.component';

@Component({
  selector: 'app-syntax',
  imports: [
    NumberComponent,
    FunctionComponent,
    StringComponent,
    CommentComponent,
    CharComponent,
    DCDocCommentComponent,
    IntComponent,
    FloatComponent,
    IfComponent,
    ElseComponent,
    VarComponent,
    StringComponent,
    StringComponent,
    StringComponent,
    StringKWComponent,
    ReturnComponent,
    CharKWComponent,
    VoidComponent,
    ForComponent,
    WhileComponent,
    PrintLineComponent,
    PrintComponent,
    PrintErrorComponent,
    InputComponent,
  ],
  templateUrl: './syntax.page.html',
  styleUrl: './syntax.page.css',
})
export class SyntaxPage {
}
