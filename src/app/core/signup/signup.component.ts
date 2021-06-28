import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  viewRegister = false;

  signupForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

 
  constructor(private fb:FormBuilder, private authSvc:AuthService) { }

  ngOnInit(): void {
  }


  onSignup():void{
    const formValue = this.signupForm.value
    this.authSvc.register(formValue).subscribe((res)=>{
      if(res){
        this.signupForm.reset()
        this.viewRegister = true
      }
    });
  }


}
