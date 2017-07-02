import { Component} from '@angular/core';
import { ReportService } from '../../app/report.service';

// import { UrlService } from '../../app/url-service';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { ToastController } from 'ionic-angular';
// import { Platform } from 'ionic-angular'
// import { PresentToast } from '../../app/present-toast';

@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  serverName;
  constructor(
    private reportService: ReportService,
    // private urlService: UrlService,
    // private nativeStorage: NativeStorage,
    // private toastCtrl: ToastController,
    // private platform : Platform,
    // private presentToast: PresentToast,
  ) { 

    reportService.GetUrl().then(data =>{this.serverName = data || 'http://localhost:3001'});
    // let me = this;
    // platform.ready().then(() => {
    //   nativeStorage.getItem('server')
    //   .then(        
    //     data => me.serverName = data || 'http://localhost:3001',
    //     error => me.presentToast.show(error)
    //     );
    // });
    //   this.nativeStorage.getItem('server')
    //   .then(
    //     data => this.serverName,
    //     error => this.presentToast(error)
    // );
  }
  
  

  // ngOnInit() {
  // this.nativeStorage.getItem('server')
  //   .then(
  //     data => this.serverName,
  //     error => this.presentToast(error)
  //   );
  // }
    
  // presentToast(message) {
  //   let toast = this.toastCtrl.create({
  //     message: message,
  //     duration: 3000,
  //     position: 'bottom'
  //   });

  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });

  //   toast.present();
  // }

  // saved(){
  //   // !this.server.name ? 'http://localhost:3001' : this.server.name   
  //   this.serverName = this.serverName || 'http://localhost:3001';
  //   this.nativeStorage.setItem('server', this.serverName)
  //     .then(
  //       () => this.presentToast.show('Stored item!'),
  //       error => this.presentToast.show(error)
  //     );
  // }

  saved(){
    this.reportService.SaveUrl(this.serverName || 'http://localhost:3001');
  }
  
 
  // getLocal(){
  // this.nativeStorage.getItem('myitem')
  //   .then(
  //     data => this.presentToast(data),
  //     error => this.presentToast(error)
  //   );
  // }
}
