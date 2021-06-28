import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse, User } from 'src/app/shared/models/user.interface';
import {JwtHelperService} from '@auth0/angular-jwt'


const helper = new JwtHelperService();
@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http:HttpClient
  ) {
    // this.checkToken()
  }



  
  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }


  /**
   * @author Luis Fernando Hernandez
   * @param email 
   * @param password 
   * @description 
   */
  login(authData:User): Observable<UserResponse | void>{
    return this.http
              .post<UserResponse>(`${environment.API_URL}/login`, authData)
              .pipe( map( (res:UserResponse) => {
                      this.saveToken(res.token)
                      return res;
                    }),
                    catchError( (err)=> this.handlerError(err)  )
              );
  }


  /**
   * @author Luis Fernando Hernandez
   * @param email 
   * @param password 
   * @description 
   */
  async register(email:string, password:string){

  }


  /**
   * @author Luis Fernando Hernandez
   * @param email 
   * @param password 
   * @description 
   */
  logout(): void{
    localStorage.removeItem('token')
    this.loggedIn.next(false);
  }


  // private checkToken():void{
  //   const userToken = localStorage.getItem('token');
  //   // const isExpired = helper.isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGE4Y2U2MThlOTFiMGIxMzY2NWUyZjkiLCJpYXQiOiIxNDI0MTgwNDg0IiwiZXhwIjoiMTQyNTM5MDE0MiJ9.yk4nouUteW54F1HbWtgg1wJxeDjqDA_8AhUPyjE5K0U')
  //   if(userToken){
  //     const isExpired = false
  //     // this.logout()
  //   } else {
  //     const isExpired = true
  //     this.loggedIn.next(true);
  //   }
  //   // set userIsLogged = isExpired
  // }

  private saveToken(token: string):void{
    localStorage.setItem('token', token)
    this.loggedIn.next(true);
    // set userIsLogged = false
  }

  private handlerError(err:any):Observable<never>{
      let errorMessage = 'An error ocured retrienving data';
      if(err){
        errorMessage = `Error: code ${err.message}`;
      }

      window.alert(errorMessage)
      return throwError(errorMessage)
  }

}
