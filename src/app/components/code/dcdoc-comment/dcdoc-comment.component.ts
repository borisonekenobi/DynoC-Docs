import {Component, input} from '@angular/core';

@Component({
	imports: [],
	selector: 'dcdoc-comment',
	styleUrl: './dcdoc-comment.component.css',
	templateUrl: './dcdoc-comment.component.html',
})
export class DCDocCommentComponent {
	public readonly info = input.required<{
		description?: string;
		params: {
			name: string;
			description: string;
		}[];
		returns?: string;
	}>();
}
