import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ArticleProvider } from '../../providers/article/article';
import { Article } from '../../models/article/article';

import { ArticlePage } from '../article/article';


/**
 * Generated class for the ArticleEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-edit',
  templateUrl: 'article-edit.html',
})
export class ArticleEditPage {

  public myArticle: Article;
  public article: FormGroup;
  public errors: Array<any> = [];
  public errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private articleProvider: ArticleProvider,
    private formBuilder: FormBuilder,
  ) {
    this.article = this.formBuilder.group({
      _id: [],
      title: [],
      body: []
    });

    this.getArticle(this.navParams.data.slug);
  }

  private getArticle(slug: string): void{
    this.articleProvider.getArticle(slug).subscribe(
      (response:any)=>{
        this.myArticle = response.article;
      }
    );
  }
  public response(response: any):void {
    if(response.success === false){
      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success === true){
      this.navCtrl.push(ArticlePage, { slug: response.article.slug });
    }
  }

  public editArticle(): void{
  this.articleProvider.updateArticle(this.article.value).subscribe(
    (response:any)=>{
      this.response(response);
    }
   );
  }
}
