import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Md5 } from 'ts-md5/dist/md5';

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

import { UserEditPage } from '../user-edit/user-edit';
import { UserDeletePage } from '../user-delete/user-delete';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id: string): void{
    this.userProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
        this.user.gravatarUrl = 'https://www.gravatar.com/avatar/'
          + Md5.hashStr(this.user.email)
          + '?d=mm&s=512';
      }
    );
  }

  public toUserEdit(){
    this.navCtrl.push(UserEditPage, { id: this.user._id });
  }

  public toUserDelete(){
    this.navCtrl.push(UserDeletePage, { id: this.user._id });
  }

}