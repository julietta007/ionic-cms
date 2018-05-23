import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users: User[];
  private loader: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadingCtl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    this.getUsers();
}

  public getUsers(): void{
    this.presentLoader();

    this.userProvider.getUsers().subscribe(
      (response:any)=>{
      this.users = response.users;   
      this.loader.dismiss(); 
      }
    );
  }

  private presentLoader(): void{

    this.loader = this.loadingCtl.create({
      content: 'Loading...'
    });
    this.loader.present();
  }
}
