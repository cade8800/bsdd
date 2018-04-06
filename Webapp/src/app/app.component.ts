import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BeiJiPage } from '../pages/bei-ji/bei-ji';
import{GuanYuPage} from '../pages/guan-yu/guan-yu';
import{ShuHaoPage} from '../pages/shu-hao/shu-hao';
import{ZhouYuPage} from '../pages/zhou-yu/zhou-yu';
import{ZhuHaoPage} from '../pages/zhu-hao/zhu-hao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '陳氏書號', component: ShuHaoPage },
      { title: '陳氏族號', component: ZhuHaoPage },
      { title: '大帝老爺咒語', component: ZhouYuPage },
      { title: '靈應簽目錄', component: HomePage },
      { title: '重建真君古廟碑记', component: BeiJiPage },
      { title: '关于', component: GuanYuPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
