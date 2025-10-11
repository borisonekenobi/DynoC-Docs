import {Component} from '@angular/core';
import {
  InputComponent
} from '../../../../components/code/function/input/input.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-input',
  imports: [
    InputComponent,
    RouterLink,
  ],
  templateUrl: './input.page.html',
  styleUrl: './input.page.css',
})
export class InputPage {

}
