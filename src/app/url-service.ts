import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular'
import { PresentToast } from './present-toast';

@Injectable()
export class UrlService {

    public url: string;
    constructor(
        private nativeStorage: NativeStorage,
        private platform : Platform,
        private presentToast: PresentToast,
    ){
        //  nativeStorage.getItem('server').then(function (data) {
        //         // let me = this;
        //         platform.ready().then(() => {
        //         nativeStorage.getItem('server').then(function (data) {
        //             if (data) {
        //                 this.url = data;
        //             }else{
        //                 this.url = 'http://localhost:3001';
        //             }
        //          },
        //             error => this.presentToast.show(error));
        //         });
        //     });

        // platform.ready().then(() => {
        // nativeStorage.getItem('server')
        // .then(       
        //     function (value) {
        //             if (value){
        //                 this.url = value;
        //             }else{
        //                this.url = 'http://localhost:3001';
        //             }
        //     },    
        //     // data => this.url = data || 'http://localhost:3001',
        //     error => this.presentToast.show(error)
        //     );
        // });

         nativeStorage.getItem('server')
            .then(       
            // function (value) {
            //         if (value){
            //             this.url = value;
            //         }else{
            //            this.url = 'http://localhost:3001';
            //         }
            // },    
            data => this.url = data || 'http://localhost:3001',
            error => this.presentToast.show(error)
            );
    }

    Save(saveUrl){
       this.url =  saveUrl || 'http://localhost:3001';
       this.nativeStorage.setItem('server',this.url )
      .then(
        () => this.presentToast.show('Stored item!'),
        error => this.presentToast.show(error)
      );
    }

    Get(): string{

        this.nativeStorage.getItem('server')
        .then(       
            function (value) {
                    if (value){
                        this.url = value;
                    }else{
                       this.url = 'http://localhost:3001';
                    }
            },    
            // data => this.url = data || 'http://localhost:3001',
            error => this.presentToast.show(error)
            );
        return this.url;
    }
    // Get(): string{
    //     this.platform.ready().then(() => {
    //     this.nativeStorage.getItem('server')
    //     .then(       
    //         function (value) {
    //                 if (value){
    //                     this.url = value;
    //                 }else{
    //                    this.url = 'http://localhost:3001';
    //                 }
    //         },    
    //         // data => this.url = data || 'http://localhost:3001',
    //         error => this.presentToast.show(error)
    //         );
    //     });
    //     return this.url;
    // }
    
}