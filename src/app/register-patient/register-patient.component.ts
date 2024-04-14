import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

constructor(
  private router: Router,
  private formBuilder : FormBuilder
){}

register:FormGroup | any;


  ngOnInit(){
    this.register = this.formBuilder.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        address: ['',[Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
    
  }

}
