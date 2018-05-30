import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-user-delete',
  templateUrl: 'user-delete.html',
})
export class UserDeletePage {

  public user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id: string): void{
    this.userProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }

  public deleteUser(): void{
    this.userProvider.deleteUser(this.user._id).subscribe(
      (response:any)=>{
        this.navCtrl.push(UsersPage);
      }
    );
  }

}