import {Component} from '@angular/core';
import {
	VoidComponent,
} from '../../../../components/code/keyword/void/void.component';
import {
	FunctionComponent,
} from '../../../../components/code/function/function.component';
import {
	StringComponent,
} from '../../../../components/code/string/string.component';
import {
	StringKWComponent,
} from '../../../../components/code/keyword/string/string.component';
import {
	IntComponent,
} from '../../../../components/code/keyword/int/int.component';
import {
	NumberComponent,
} from '../../../../components/code/number/number.component';
import {
	CommentComponent,
} from '../../../../components/code/comment/comment.component';
import {
	ReturnComponent,
} from '../../../../components/code/keyword/return/return.component';
import {IfComponent} from '../../../../components/code/keyword/if/if.component';
import {
	FloatComponent,
} from '../../../../components/code/keyword/float/float.component';
import {
	PrintLineComponent,
} from '../../../../components/code/function/print-line/print-line.component';

@Component({
	imports: [
		VoidComponent,
		FunctionComponent,
		StringComponent,
		StringKWComponent,
		IntComponent,
		NumberComponent,
		CommentComponent,
		ReturnComponent,
		IfComponent,
		FloatComponent,
		PrintLineComponent,
	],
	selector: 'app-functions',
	styleUrl: './functions.page.css',
	templateUrl: './functions.page.html',
})
export class FunctionsPage {
}
