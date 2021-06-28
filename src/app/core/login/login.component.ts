import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authSvc:AuthService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    
  }


  onLogin():void{
    const formValue = this.loginForm.value
    this.authSvc.login(formValue).subscribe((res)=>{
      if(res){
        this.router.navigate(['profile']);
      }
    });
  }


}
