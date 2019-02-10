import { Component } from '@angular/core';
import {State} from "@ngrx/store";
import * as fromStore from './store/state/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
