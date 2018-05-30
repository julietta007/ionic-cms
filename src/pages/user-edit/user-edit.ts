import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../../models/user/user';
import { UserPage } from '../user/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
  styles: ['user-create.scss']
})
export class UserEditPage {

  public myUser: User;
  public user: FormGroup;
  public errors: Array<any> = [];
  public errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private formBuilder: FormBuilder
  ) {
    this.user = this.formBuilder.group({
      _id: [],
      username: [],
      email: [],
      first_name: [],
      last_name: []
    });
  }
  ionViewDidLoad() {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id: string): void{
    this.userProvider.getUser(id).subscribe(
      (response:any)=>{
        this.myUser = response.user;
      }
    );
  }

  public response(response: any): void{
    if(response.success === false){

      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success === true){
      this.navCtrl.push(UserPage, { id: response.user._id });
    }
  }

  public editUser(): void{
    this.userProvider.updateUser(this.user.value).subscribe(
      (response:any)=>{
        this.response(response);
      }
    );
  }

}