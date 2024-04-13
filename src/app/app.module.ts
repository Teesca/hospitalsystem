import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { NavbarpatientComponent } from './navbarpatient/navbarpatient.component';
import { ViewappointmentsComponent } from './viewappointments/viewappointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterPatientComponent,
    DashboardPatientComponent,
    NavbarpatientComponent,
    ViewappointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
