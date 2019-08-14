import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';

import { HttpClientModule }    from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { AuthService } from './service/auth.service';



const applicationRoutes:Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent}
];  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
