import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { NavbarpatientComponent } from './navbarpatient/navbarpatient.component';
import { ViewappointmentsComponent } from './viewappointments/viewappointments.component';
import { SickletterComponent } from './sickletter/sickletter.component';
import { PaymentComponent } from './payment/payment.component';
import { BookdoctorappComponent } from './bookdoctorapp/bookdoctorapp.component';
import { DoctornavbarComponent } from './doctornavbar/doctornavbar.component';
import { DoctordescriptionComponent } from './doctordescription/doctordescription.component';
import { DoctorviewpatientsComponent } from './doctorviewpatients/doctorviewpatients.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';
import { BookpatientComponent } from './bookpatient/bookpatient.component';
import { UserscrudComponent } from './userscrud/userscrud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterPatientComponent,
    DashboardPatientComponent,
    NavbarpatientComponent,
    ViewappointmentsComponent,
    SickletterComponent,
    PaymentComponent,
    BookdoctorappComponent,
    DoctornavbarComponent,
    DoctordescriptionComponent,
    DoctorviewpatientsComponent,
    LoginpageComponent,
    NavbarhomeComponent,
    BookpatientComponent,
    UserscrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
