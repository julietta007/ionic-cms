import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { UserDeletePage } from '../pages/user-delete/user-delete';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/user/user';
import { UserCreatePage } from '../pages/user-create//user-create';

import { ArticlesPage } from '../pages/articles/articles';
import { ArticlePage } from '../pages/article/article';
import { ArticleCreatePage } from '../pages/article-create/article-create';
import { ArticleEditPage } from '../pages/article-edit/article-edit';
import { ArticleDeletePage } from '../pages/article-delete/article-delete';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { ArticleProvider } from '../providers/article/article';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserDeletePage,
    UserEditPage,
    ArticlesPage,
    ArticlePage,
    ArticleCreatePage,
    ArticleDeletePage,
    ArticleEditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    UserDeletePage,
    ArticlesPage,
    ArticlePage,
    ArticleCreatePage,
    ArticleDeletePage,
    ArticleEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ArticleProvider
  ]
})
export class AppModule {}
