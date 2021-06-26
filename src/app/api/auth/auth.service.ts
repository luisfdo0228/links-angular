import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';



@Injectable()
export class AuthService {


  constructor(
  ) { }


  /**
   * @author Luis Fernando Hernandez
   * @param email 
   * @param password 
   * @description 
   */
  async login(email:string, password:string){

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
  async logout(){

  }

}
