import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
// import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule }       from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { ReportProfit } from '../pages/report-profit/report-profit';
import { ReportProfitByItem } from '../pages/report-profit-by-item/report-profit-by-item';
import { ReportMinStock } from '../pages/list-supplier1/list-supplier1';
import { ReportInventory } from '../pages/list-supplier2/list-supplier2';
import { ItemStockPage } from '../pages/item-details/item-details';
import { DataCollector } from '../pages/stock-checker/stock-checker';
import { SettingPage } from '../pages/setting/setting';
import { ReportService } from './report.service';
import { PresentToast } from './present-toast';
// import { Storage } from '@ionic/storage';
// import { UrlService } from './url-service';
// import { ToNumberPipe } from './to-number';
// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
 


@NgModule({
  declarations: [
    MyApp,
    ReportProfit,
    ReportProfitByItem,
    ItemStockPage,
    ReportMinStock,
    ReportInventory,
    SettingPage,
    DataCollector
    // PresentToast
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxDatatableModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportProfit,
    ReportProfitByItem,
    ItemStockPage,
    ReportMinStock,
    ReportInventory,
    SettingPage,
    DataCollector
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ReportService,
    PresentToast,
    // NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
