import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
  ) { }

  ngOnInit(): void {

  }



}
