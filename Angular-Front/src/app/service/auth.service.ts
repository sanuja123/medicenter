import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  constructor(
    private http:HttpClient
  ) { }


  registerUser(user){
    //console.log(user);
    return this.http.post("http://localhost:3000/users/register",user);
  }
}
