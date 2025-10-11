import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-wrong-route.component',
  imports: [
    RouterLink,
  ],
  templateUrl: './wrong-route.component.html',
  styleUrl: './wrong-route.component.css'
})
export class WrongRouteComponent {

}
