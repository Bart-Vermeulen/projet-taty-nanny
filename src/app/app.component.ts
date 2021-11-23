import { Component } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthGuard],
})
export class AppComponent {

}
