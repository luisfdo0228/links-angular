import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:[''],
    password:['']
  })

  constructor(private authSvc:AuthService, private fb:FormBuilder) { }

  ngOnInit(): void {
    const userData = {
      email:'email@email.com',
      password:'123213'
    };
    this.authSvc.login(userData).subscribe((res)=>console.log('res'));
  }


}
