import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/api/auth/auth.service';
import { LinksService } from 'src/app/api/links/links.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {

  // id = ''
  url:any = '';  

  linksForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  links = [
    {
      "id": "panel_1",
      "createdAt": "2021-03-18T15:11:43.458Z",
      "url": "https://daphne.com",
      "name": "rodger.name"
    },
    {
        "id": "panel_2",
        "createdAt": "2021-03-18T18:01:24.837Z",
        "url": "http://ferne.biz",
        "name": "german.name"
    }
  ]

  constructor(
    private authSvc: AuthService,
    private linkSvc: LinksService,
  ) { }

  ngOnInit(): void {
  }


  add(): void {
    let today = new Date();
    this.links.push({
      "id": 'panel_' + Math.floor(Math.random() * 999999),
      "createdAt": today.toISOString(),
      "url": this.linksForm.get('url').value,
      "name": this.linksForm.get('name').value
    })
    this.linksForm.reset()
  }



  delete(id): void{
    const keyResponse = this.getKeyObject(id);
    if (keyResponse !== -1) {
      this.links.splice(keyResponse, 1);
    }
  }



  getKeyObject(id) {
    return this.links.map((e) => {
      return e.id;
    }).indexOf(id);
  }


  onLogout(): void{
    this.authSvc.logout();
  }



  handlerError(err:any):Observable<never>{
    let errorMessage = 'An error ocured retrienving data';
    if(err){
      errorMessage = `Error: code ${err.message}`;
    }

    window.alert(errorMessage)
    return throwError(errorMessage)
}








}
