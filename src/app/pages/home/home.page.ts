import {
	AfterViewInit,
	Component,
	ElementRef,
	Signal,
	viewChild,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ForComponent} from '../../components/code/keyword/for/for.component';
import {IntComponent} from '../../components/code/keyword/int/int.component';
import {NumberComponent} from '../../components/code/number/number.component';
import {
	PrintLineComponent,
} from '../../components/code/function/print-line/print-line.component';
import {StringComponent} from '../../components/code/string/string.component';
import {
	CommentComponent,
} from '../../components/code/comment/comment.component';
import {VarComponent} from '../../components/code/keyword/var/var.component';
import {IfComponent} from '../../components/code/keyword/if/if.component';
import {ElseComponent} from '../../components/code/keyword/else/else.component';
import {
	FunctionComponent,
} from '../../components/code/function/function.component';
import {
	ReturnComponent,
} from '../../components/code/keyword/return/return.component';
import {
	FloatComponent,
} from '../../components/code/keyword/float/float.component';
import {
	PrintComponent,
} from '../../components/code/function/print/print.component';
import {
	StringKWComponent,
} from '../../components/code/keyword/string/string.component';
import {
	InputComponent,
} from '../../components/code/function/input/input.component';
import {VoidComponent} from '../../components/code/keyword/void/void.component';
import {
	WhileComponent,
} from '../../components/code/keyword/while/while.component';

@Component({
	imports: [
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
	],
	selector: 'app-home',
	styleUrl: './home.page.css',
	templateUrl: './home.page.html',
})
export class HomePage implements AfterViewInit {
	private timer: number = 0;
	private examples: Signal<ElementRef<HTMLDivElement>> = viewChild.required(
		'codeExamples');
	private index: number = 0;
	private prevIndex: number = 0;

	public constructor() {
		setInterval(() => {
			this.timer += 1;
			if (this.timer >= 100) this.next();
		}, 100);
	}

	public ngAfterViewInit(): void {
		this.set();
	}

	protected next(): void {
		this.prevIndex = this.index;
		this.index = (this.index + 1) %
			this.examples().nativeElement.children.length;
		this.set();
	}

	protected prev(): void {
		this.prevIndex = this.index;
		const length = this.examples().nativeElement.children.length;
		this.index = (this.index - 1 + length) % length;
		this.set();
	}

	private set(): void {
		this.examples().nativeElement.children[this.prevIndex].classList.add(
			'hidden');
		this.examples().nativeElement.children[this.index].classList.remove(
			'hidden');
		this.timer = 0.0;
	}
}
