import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  edit = false
  id = ''
  url:any = '';  

  linksForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });


  constructor(
    private authSvc: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }


  onLogout(): void{
    this.authSvc.logout();
    this.router.navigate(['']);
  }








}
