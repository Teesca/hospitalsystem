import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  Formlogin: FormGroup | any;
  submit = false;

  showError = false;
  errorMessaage = 'Incorrect. Please log in again';
  // public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ){
    // const isLoggedIn$ = localStorage.getItem('loggedIn') == 'true'
  }


  ngOnInit(){
    this.Formlogin = this.formBuilder.group({
      email:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
