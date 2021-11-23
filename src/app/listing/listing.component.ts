import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  providers: [LoginComponent]
})
export class ListingComponent implements OnInit {

  aliments: Array<string> = [];
  i: number = 0;

  constructor(private router: Router, private login: LoginComponent) { }

  ngOnInit(): void {
    this.i = localStorage.length;
    for (let i = 0; i < this.i; i++){
      const al = localStorage.getItem(String(i));
      console.log(al);
      this.aliments.push(String(al));
    }
    
  }

  clear() {
    localStorage.clear();
    this.aliments = [];
  }

  goCreate() {
    this.router.navigate(['/creation']);
  }

  goAcceuil() {
    this.router.navigate(['/acceuil']);
  }

  onSignOut() {
    this.login.onSignOut();
  }
}
