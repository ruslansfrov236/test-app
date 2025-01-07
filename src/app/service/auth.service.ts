import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';

import { AuthResponse } from '../entities/auth-response';
import { BehaviorSubject, firstValueFrom, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../entities/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User|null>(null);


  constructor( @Inject("baseUrl") private baseUrl , private http:HttpClient){}

  async isLoggedIn(): Promise<boolean> {

    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }

    const userItem = localStorage.getItem("user");

    if (userItem === null) {
      return false;
    }

    return true;
  }


  async signUp(email: string, password: string, image:string , confirmPassword:string, name:string, callBackFunction: ()=> void):Promise<any>{

    const data:Observable<AuthResponse> = await this.http.post<AuthResponse>(this.baseUrl + environment.firebase.apiKey,{
      email:email,
      image:image,
      name:name,
      password:password,
      confirmPassword:confirmPassword,
      returnSecureToken: true
    });
      callBackFunction();

  }

 async signIn(email: string, password: string, callBackFunction: ()=> void ):Promise<any> {
    var data:Observable<AuthResponse> = await  this.http.post<AuthResponse>(this.baseUrl+ environment.firebase.apiKey ,{
      email:email,
      password:password,
      returnSecureToken: true
    });

    callBackFunction();

  }

  sigInOut(){
    localStorage.removeItem('user')
  }


}



