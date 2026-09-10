import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-wrong-route.component',
  imports: [
    RouterLink,
  ],
  templateUrl: './wrong-route.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './wrong-route.component.css'
})
export class WrongRouteComponent {

}
