import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BeiJiPage } from '../pages/bei-ji/bei-ji';
import{GuanYuPage} from '../pages/guan-yu/guan-yu';
import{ShuHaoPage} from '../pages/shu-hao/shu-hao';
import{ZhouYuPage} from '../pages/zhou-yu/zhou-yu';
import{ZhuHaoPage} from '../pages/zhu-hao/zhu-hao';
import{QianPage} from '../pages/qian/qian';

import { PagesModule } from '../pages/pages.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    PagesModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeiJiPage,
    GuanYuPage,
    ShuHaoPage,
    ZhouYuPage,
    ZhuHaoPage,
    QianPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
