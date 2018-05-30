import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  LoadingController,
  Refresher } from 'ionic-angular';

import { User } from '../../models/user/user';
import { UserCreatePage } from '../user-create/user-create';
import { UserProvider } from '../../providers/user/user';
import { UserPage } from '../user/user';

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

  public doRefresh(refresher: Refresher): void{

    this.userProvider.getUsers().subscribe(
      (response:any)=>{
        this.users = response.users;
        refresher.complete();
      }
    );

    setTimeout(
      ()=>{
        refresher.complete();
      },
      2000
    );

    
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

  public toUser(id: string): void{
    this.navCtrl.push(UserPage, { id: id });
  }
  
  public toCreateUser(): void{
    this.navCtrl.push(UserCreatePage);
  }
}
