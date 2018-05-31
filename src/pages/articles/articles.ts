import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  LoadingController,
  Refresher } from 'ionic-angular';

import { Article } from '../../models/article/article';
import { ArticleCreatePage } from '../article-create/article-create';
import { ArticleProvider } from '../../providers/article/article';
import { ArticlePage } from '../article/article';

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  public articles: Article[];
  private loader: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private articleProvider: ArticleProvider,
    private loadingCtl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    this.getArticles();
  }

  public doRefresh(refresher: Refresher): void{

    this.articleProvider.getArticles().subscribe(
      (response:any)=>{
        this.articles = response.articles;
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

  public getArticles(): void{
    this.presentLoader();

    this.articleProvider.getArticles().subscribe(
      (response:any)=>{
      this.articles = response.articles;   
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

  public toArticle(slug: string): void{
    this.navCtrl.push(ArticlePage, { slug: slug });
  }
  
  public toCreateArticle(): void{
    this.navCtrl.push(ArticleCreatePage);
  }
}
