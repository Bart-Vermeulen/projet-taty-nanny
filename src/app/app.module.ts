import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CreationComponent } from './creation/creation.component';
import { ListingComponent } from './listing/listing.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './services/auth-guard.service';
import {RouterModule, Routes} from "@angular/router";
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'acceuil', canActivate: [AuthGuard], component:AcceuilComponent},
  {path: 'creation', canActivate: [AuthGuard], component: CreationComponent},
  {path: 'listing', canActivate: [AuthGuard], component: ListingComponent},
  {path:'', component:LoginComponent},
  {path:'not-found', component:FourOFourComponent},
  {path:'**', redirectTo:'/not-found'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    CreationComponent,
    ListingComponent,
    FourOFourComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
