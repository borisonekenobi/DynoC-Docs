import {Component} from '@angular/core';
import {
  IntComponent,
} from '../../../../components/code/keyword/int/int.component';
import {
  FloatComponent,
} from '../../../../components/code/keyword/float/float.component';
import {
  NumberComponent,
} from '../../../../components/code/number/number.component';
import {
  BoolComponent,
} from '../../../../components/code/keyword/bool/bool.component';
import {
  TrueComponent,
} from '../../../../components/code/keyword/true/true.component';
import {
  CommentComponent,
} from '../../../../components/code/comment/comment.component';
import {
  StringComponent
} from '../../../../components/code/string/string.component';
import {
  VoidComponent
} from '../../../../components/code/keyword/void/void.component';
import {
  FunctionComponent
} from '../../../../components/code/function/function.component';
import {IfComponent} from '../../../../components/code/keyword/if/if.component';

@Component({
  selector: 'app-variables-and-scope.page',
  imports: [
    IntComponent,
    FloatComponent,
    NumberComponent,
    BoolComponent,
    TrueComponent,
    CommentComponent,
    StringComponent,
    VoidComponent,
    FunctionComponent,
    IfComponent,
  ],
  templateUrl: './variables-and-scope.page.html',
  styleUrl: './variables-and-scope.page.css',
})
export class VariablesAndScopePage {
}
