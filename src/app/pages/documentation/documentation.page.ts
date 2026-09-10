import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-documentation',
  imports: [
    RouterOutlet],
  templateUrl: './documentation.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './documentation.page.css',
})
export class DocumentationPage {

}
