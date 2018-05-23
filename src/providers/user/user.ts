import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user/user';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private url = 'http://localhost:3000/api/users';

  constructor(public http: HttpClient) { }

  public getUser(){
    console.log('Get User');
  }
  public getUsers(): Observable<User>{
    return this.http.get<User>(this.url);
  }
  public createUser(){
    console.log('Create User');
  }
  public updateUser(){
    console.log('Update User');
  }
  public deleteUser(){
    console.log('Delete User');
  }

}
