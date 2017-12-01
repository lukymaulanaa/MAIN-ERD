import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { QuizPage } from '../pages/quiz/quiz';
import { AboutPage } from '../pages/about/about';
import { QuizcontentPage } from '../pages/quizcontent/quizcontent';
import { QuizanswerPage } from '../pages/quizanswer/quizanswer';
import { QuizselectPage } from '../pages/quizselect/quizselect';
import { ScorePage } from '../pages/score/score';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
