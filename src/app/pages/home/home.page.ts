import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ForComponent} from '../../components/code/keyword/for/for.component';
import {IntComponent} from '../../components/code/keyword/int/int.component';
import {NumberComponent} from '../../components/code/number/number.component';
import {
  PrintLineComponent
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';
import {
  CommentComponent
} from '../../components/code/comment/comment.component';
import {VarComponent} from '../../components/code/keyword/var/var.component';
import {IfComponent} from '../../components/code/keyword/if/if.component';
import {ElseComponent} from '../../components/code/keyword/else/else.component';
import {
  FunctionComponent
} from '../../components/code/function/function.component';
import {
  ReturnComponent
} from '../../components/code/keyword/return/return.component';
import {
  FloatComponent
} from '../../components/code/keyword/float/float.component';
import {
  PrintComponent
} from '../../components/code/function/print/print.component';
import {
  StringKWComponent
} from '../../components/code/keyword/string/string.component';
import {
  InputComponent
} from '../../components/code/function/input/input.component';
import {VoidComponent} from '../../components/code/keyword/void/void.component';
import {
  WhileComponent
} from '../../components/code/keyword/while/while.component';

@Component({
  selector: 'app-home', imports: [
    RouterLink,
    ForComponent,
    IntComponent,
    NumberComponent,
    PrintLineComponent,
    StringComponent,
    CommentComponent,
    VarComponent,
    IfComponent,
    ElseComponent,
    FunctionComponent,
    ReturnComponent,
    FloatComponent,
    PrintComponent,
    StringKWComponent,
    InputComponent,
    VoidComponent,
    WhileComponent,
  ], templateUrl: './home.page.html', styleUrl: './home.page.css',
})
export class HomePage {
  timer: number = 0;
  examples!: HTMLDivElement;
  index: number = 0;
  prevIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
      if (this.timer >= 100) this.next();
    }, 100)
  }

  ngOnInit() {
    this.examples = document.getElementById('code-examples') as HTMLDivElement;
    this.set();
  }

  next() {
    this.prevIndex = this.index;
    this.index = (this.index + 1) % this.examples.children.length;
    this.set();
  }

  prev() {
    this.prevIndex = this.index;
    this.index = (this.index - 1 + this.examples.children.length) % this.examples.children.length;
    this.set();
  }

  set() {
    this.examples.children[this.prevIndex].classList.add('hidden');
    this.examples.children[this.index].classList.remove('hidden');
    this.timer = 0.0;
  }
}
