import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { ReportProfit } from '../pages/report-profit/report-profit';
import { ReportProfitByItem } from '../pages/report-profit-by-item/report-profit-by-item';
import { ReportMinStock } from '../pages/list-supplier1/list-supplier1';
import { ReportInventory } from '../pages/list-supplier2/list-supplier2';
import { SettingPage } from '../pages/setting/setting';
import { DataCollector } from '../pages/stock-checker/stock-checker';
// import { ReportService } from './report.service';
// import { UrlService } from './url-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = SettingPage ;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,   
    // public reportService: ReportService, 
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'ยอดขายกำไร?', component: ReportProfit, icon: 'stats'},
      { title: 'ขายอะไรไป?', component: ReportProfitByItem, icon: 'cart' },
      { title: 'ต้องสั่งอะไรบ้าง?', component: ReportMinStock, icon: 'alarm' },
      { title: 'คลังทั้งหมด?', component: ReportInventory, icon: 'home' },
      { title: 'เครื่องนับสินค้า', component: DataCollector, icon: 'sync' },
      { title: 'ตั้งค่าServerก่อน', component: SettingPage, icon: 'options' },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.reportService.GetUrl();
      // this.urlService.Get();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
