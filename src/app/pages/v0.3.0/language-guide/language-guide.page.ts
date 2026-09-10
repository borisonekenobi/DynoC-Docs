import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-language-guide',
  imports: [
    RouterOutlet],
  templateUrl: './language-guide.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './language-guide.page.css',
})
export class LanguageGuidePage {

}
