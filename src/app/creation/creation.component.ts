import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
  providers: [LoginComponent]
})
export class CreationComponent implements OnInit {

  aliment: string = "";
  i: number = 0;

  constructor(private router: Router, private login: LoginComponent) { }

  ngOnInit(): void {
  }

  ajouterAliment() {
    this.i = localStorage.length;
    localStorage.setItem(String(this.i), this.aliment);
  }

  goList() {
    this.router.navigate(['/listing']);
  }

  goAcceuil() {
    this.router.navigate(['/acceuil']);
  }

  onSignOut() {
    this.login.onSignOut();
  }
}
