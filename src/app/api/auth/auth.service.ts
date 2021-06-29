import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { UserResponse, User, UserSignup, UserResponseRegister } from 'src/app/shared/models/user.interface';
import {JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';


const helper = new JwtHelperService();
@Injectable()
export class AuthService {


  constructor(
    private http:HttpClient,
    private router:Router
  ) {
  }

  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';


  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();
  
  


  /**
   * @author Luis Fernando Hernandez
   * @param email 
   * @param password 
   * @description 
   */
  login(authData:User): Observable<UserResponse | void>{
    return this.http
              .post<UserResponse>(`${environment.apiUrl}/login`, authData)
              .pipe( map( (user:UserResponse) => {
                      this.saveLocalStorage(user.token);
                      this.changeLoginStatusSubject.next(true);
                      return user;
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
  register(authData:UserSignup): Observable<UserResponseRegister | void>{
    return this.http
              .post<UserResponseRegister>(`${environment.apiUrl}/register`, authData)
              .pipe( map( (user:UserResponseRegister) => {
                      return user;
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
  logout(): void{
    localStorage.removeItem('token')
    this.changeLoginStatusSubject.next(false);
    this.router.navigate(['/login']);
  }


  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem('token');
    if (!isLogged) {
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }



  private saveLocalStorage(token: string):void{
    localStorage.setItem('token', token)
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
