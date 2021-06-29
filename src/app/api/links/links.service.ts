import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LinksCreate, Links } from 'src/app/shared/models/links.interface';


@Injectable()
export class LinksService {


  constructor(
    private http:HttpClient,
  ) {
  }


  create(authData:LinksCreate): Observable<Links | void>{
    return this.http
              .post<Links>(`${environment.apiUrl}/links`, authData)
              .pipe( map( (user:Links) => {
                      return user;
                    }),
                    catchError( (err)=> this.handlerError(err)  )
              );

  }


  // delete(id: any): Observable<any> {
  //   return this.http.delete<any>(`${environment.apiUrl}links/${id}`, {
  //     headers: {'Content-Type':'application/json','Token':'213123adsdsa21123ww'}
  //   });
  // }



  //  getTripNameById(tripId: any): Observable<any> {

  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   return this.http.delete<string>(`${environment.apiUrl}links/${tripId}`,  httpOptionsPlain);
  // }





  private handlerError(err:any):Observable<never>{
      let errorMessage = 'An error ocured retrienving data';
      if(err){
        errorMessage = `Error: code ${err.message}`;
      }

      window.alert(errorMessage)
      return throwError(errorMessage)
  }

}
