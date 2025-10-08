import {Component} from '@angular/core';
import {
  IntComponent,
} from '../../../../components/code/keyword/int/int.component';
import {
  NumberComponent,
} from '../../../../components/code/number/number.component';
import {IfComponent} from '../../../../components/code/keyword/if/if.component';
import {
  FunctionComponent,
} from '../../../../components/code/function/function.component';
import {
  StringComponent,
} from '../../../../components/code/string/string.component';
import {
  ElseComponent,
} from '../../../../components/code/keyword/else/else.component';
import {
  WhileComponent,
} from '../../../../components/code/keyword/while/while.component';
import {
  ForComponent,
} from '../../../../components/code/keyword/for/for.component';
import {
  BreakComponent,
} from '../../../../components/code/keyword/break/break.component';
import {
  ContinueComponent,
} from '../../../../components/code/keyword/continue/continue.component';
import {
  CommentComponent,
} from '../../../../components/code/comment/comment.component';
import {
  ExitComponent
} from '../../../../components/code/keyword/exit/exit.component';

@Component({
  selector: 'app-control-flow',
  imports: [
    IntComponent,
    NumberComponent,
    IfComponent,
    FunctionComponent,
    StringComponent,
    ElseComponent,
    WhileComponent,
    ForComponent,
    BreakComponent,
    ContinueComponent,
    CommentComponent,
    ExitComponent,
  ],
  templateUrl: './control-flow.page.html',
  styleUrl: './control-flow.page.css',
})
export class ControlFlowPage {

}
