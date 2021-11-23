import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  providers: [LoginComponent]
})
export class AcceuilComponent implements OnInit {

  constructor( private login: LoginComponent, private router: Router) { }

  ngOnInit(): void {
  }

  goCreate() {
    this.router.navigate(['/creation']);
  }

  goList() {
    this.router.navigate(['/listing']);
  }

  onSignOut() {
    this.login.onSignOut();
  }
}
