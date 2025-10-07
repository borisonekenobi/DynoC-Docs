import {Component, Input} from '@angular/core';

@Component({
  selector: 'dcdoc-comment',
  imports: [],
  templateUrl: './dcdoc-comment.component.html',
  styleUrl: './dcdoc-comment.component.css'
})
export class DCDocCommentComponent {
  @Input({required: true}) info!: {
    description?: string;
    params: {
      name: string;
      description: string;
    }[];
    returns?: string;
  };
}
