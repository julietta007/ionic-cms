import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

import { Article } from '../../models/article/article';
import { ArticleProvider } from '../../providers/article/article';

import { ArticleEditPage } from '../article-edit/article-edit';

@IonicPage()
@Component({
  selector: 'page-article-create',
  templateUrl: 'article-create.html',
  styles: ['user-create']
})
export class ArticleCreatePage {

  public article: FormGroup;
  public errors: Array<any> = [];
  public errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private articleProvider: ArticleProvider,
    private formBuilder: FormBuilder,
  ){
  this.article = this.formBuilder.group({
    title: []
  });
}

response(response: any): void{
  if(response.success === false){
    this.errors = response.error.errors;
    this.errorMessage = response.error._message;
  }

  if(response.success === true){
    this.navCtrl.push(ArticleEditPage, {slug: response.article.slug});
  }
}

public createArticle(): void{
  
  this.articleProvider.createArticle(this.article.value).subscribe(
    (response:any)=>{
      this.response(response);
    }
  );
  }
}
