import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth/auth.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css'],
  providers: [AuthService]
})
export class NabvarComponent implements OnInit {





  constructor(public authSvc:AuthService, private router:Router) {
    
  }

  ngOnInit(): void {
    
  }


  url_login(){
    this.router.navigate(['login']);
  }


  url_signup(){
    this.router.navigate(['signup']);
  }

}
