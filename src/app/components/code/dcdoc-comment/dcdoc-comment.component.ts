import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'dcdoc-comment',
  imports: [],
  templateUrl: './dcdoc-comment.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
