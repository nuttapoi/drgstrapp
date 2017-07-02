import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class PresentToast {
     constructor(
          private toastCtrl: ToastController
    ){}
    
    show(tmessage) {
        let toast = this.toastCtrl.create({
        message: tmessage,
        duration: 3000,
        position: 'bottom'
        });

        toast.onDidDismiss(() => {
        console.log('Dismissed toast');
        });

        toast.present();
    }
}
