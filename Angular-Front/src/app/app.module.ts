import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';

import { HttpClientModule }    from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientComponent } from './COMPONENTS/patient/patient.component';



const applicationRoutes:Routes = [
  {path : 'patient',component:PatientComponent},
  
];  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientComponent,
    

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
