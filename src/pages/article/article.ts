import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Md5 } from 'ts-md5/dist/md5';

import { ArticleProvider } from '../../providers/article/article';
import { Article } from '../../models/article/article';

import { ArticleEditPage } from '../article-edit/article-edit';
import { ArticleDeletePage } from '../article-delete/article-delete';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  public article: Article;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private articleProvider: ArticleProvider
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

  public toArticleEdit(){
    this.navCtrl.push(ArticleEditPage, { slug: this.article.slug });
  }

  public toArticleDelete(){
    this.navCtrl.push(ArticleDeletePage, { slug: this.article.slug });
  }

}