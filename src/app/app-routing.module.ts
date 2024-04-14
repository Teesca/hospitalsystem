import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewappointmentsComponent } from './viewappointments/viewappointments.component';
import { SickletterComponent } from './sickletter/sickletter.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctordescriptionComponent } from './doctordescription/doctordescription.component';
import { DoctorviewpatientsComponent } from './doctorviewpatients/doctorviewpatients.component';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { BookdoctorappComponent } from './bookdoctorapp/bookdoctorapp.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BookpatientComponent } from './bookpatient/bookpatient.component';
import { UserscrudComponent } from './userscrud/userscrud.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'register', component: RegisterPatientComponent},
  {path: 'viewappointment', component:ViewappointmentsComponent},
  {path: 'sickletter', component: SickletterComponent},
  {path: 'doctordescription', component:DoctordescriptionComponent},
  {path: 'viewPatient', component:DoctorviewpatientsComponent}, 
  {path: 'bookdoctor', component:BookdoctorappComponent},
  {path: 'patienthome', component:DashboardPatientComponent},
  {path:'login', component:LoginpageComponent},
  {path: 'bookpatient', component:BookpatientComponent},
  {path: 'users', component:UserscrudComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
