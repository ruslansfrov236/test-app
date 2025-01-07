import { HttpClient } from '@angular/common/http';

import { firstValueFrom, Observable } from 'rxjs';
import { CreateUser } from '../entities/users/create-user';
import { UpdateUser } from '../entities/users/update-user';
import { User } from '../entities/users/user';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {


 constructor( @Inject("baseUrl") private baseUrl , private http:HttpClient){}


 async getAll():Promise<User[]>{

  const data:Observable<User[]>= await this.http.get<User[]>(this.baseUrl +'users.json');
  return await firstValueFrom(data);
 }

 async getById(id:string):Promise<User>{
  const data:Observable<User> = await this.http.get<User>(this.baseUrl+ 'users' + id+ '.json')

  return await firstValueFrom(data)
 }

 async create(createUser:CreateUser):Promise<CreateUser>{
  const data:Observable<CreateUser> = await this.http.post<CreateUser>(this.baseUrl+'users.json', createUser);

  return await firstValueFrom(data)
 }


async update(updateUser:UpdateUser):Promise<UpdateUser>{
  const data:Observable<UpdateUser> = await this.http.put<UpdateUser>(this.baseUrl+ 'users.json' , updateUser) ;

  return await firstValueFrom(data)
}
}
