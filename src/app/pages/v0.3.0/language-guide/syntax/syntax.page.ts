import {Component} from '@angular/core';
import {
  KeywordComponent
} from '../../../../components/code/keyword/keyword.component';
import {
  NumberComponent
} from '../../../../components/code/number/number.component';
import {
  FunctionComponent
} from '../../../../components/code/function/function.component';
import {
  StringComponent
} from '../../../../components/code/string/string.component';
import {
  CommentComponent
} from '../../../../components/code/comment/comment.component';
import {CharComponent} from '../../../../components/code/char/char.component';
import {
  DCDocCommentComponent
} from '../../../../components/code/dcdoc-comment/dcdoc-comment.component';

@Component({
  selector: 'app-syntax',
  imports: [
    KeywordComponent, NumberComponent, FunctionComponent,
    StringComponent, CommentComponent, CharComponent, DCDocCommentComponent],
  templateUrl: './syntax.page.html',
  styleUrl: './syntax.page.css',
})
export class SyntaxPage {

}
