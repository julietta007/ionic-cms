import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../../models/article/article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
}

@Injectable()
export class ArticleProvider {

  private url = 'http://localhost:3000/api/articles';

  constructor(public http: HttpClient) { }

  public getArticle(id: string): Observable<Article>{
    return this.http.get<Article>(`${this.url}/${id}`);
  }
  public getArticles(): Observable<Article>{
    return this.http.get<Article>(this.url);
  }
  public createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article, httpOptions);
  }
  public updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, article, httpOptions);
  }
  public deleteArticle(id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }

}
