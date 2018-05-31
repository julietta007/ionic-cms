import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArticlesPage } from '../articles/articles';
import { Article } from '../../models/article/article';
import { ArticleProvider } from '../../providers/article/article';

@IonicPage()
@Component({
  selector: 'page-article-delete',
  templateUrl: 'article-delete.html',
})
export class ArticleDeletePage {

  public article: Article;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public articleProvider: ArticleProvider
  ) {
    this.getArticle(this.navParams.data.slug);
  }

  private getArticle(slug: string): void{
    this.articleProvider.getArticle(slug).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }

  public deleteArticle(): void{
    this.articleProvider.deleteArticle(this.article._id).subscribe(
      (response:any)=>{
        this.navCtrl.push(ArticlesPage);
      }
    );
  }

}