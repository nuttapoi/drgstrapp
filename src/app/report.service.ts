import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http ,Response,RequestOptions, Headers}       from '@angular/http';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { Platform } from 'ionic-angular';
import { Supplier } from './supplier';
import { MinStock } from './min-stock';
import { Stock } from './stock';
import { SaleSummary } from './sale-summary';
import { SaleByItem } from './sale-by-item';
// import { UrlService } from './url-service';
import { PresentToast } from './present-toast';
import { Storage } from '@ionic/storage';

@Injectable()
export class ReportService {
    public baseUrl = 'http://localhost:3001';
    private headers  = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http,
        public storage: Storage,
        private presentToast: PresentToast,
        ) 
    { 
        this.GetUrl().then(data =>{this.baseUrl = data || 'http://localhost:3001'});

    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
 
    // use sqlite
    SaveUrl(val){
        this.baseUrl = val || 'http://localhost:3001';
        this.storage.set('server', this.baseUrl);
     };

    GetUrl() {
        return this.storage.get('server').then((data) => {
        this.baseUrl = data;
        return data;
          });
        
    };

    getProfitReport(fromDate,toDate): Observable<SaleSummary[]> {
        let endPoint:string = '/rpt_profit?fromDate=' + fromDate + '&toDate=' + toDate;
        // this.presentToast.show(`${this.baseUrl}${endPoint}`)
      

        return this.http
               .get(`${this.baseUrl}/api${endPoint}`, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getProfitByItem(fromDate,toDate): Observable<SaleByItem[]> {
        let endPoint:string = '/rpt_profitByItem?fromDate=' + fromDate + '&toDate=' + toDate;
        return this.http
               .get(`${this.baseUrl}/api${endPoint}`, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getMinSupplier(): Observable<Supplier[]> {
        return this.http
               .get(`${this.baseUrl}/api/rpt_minSupplier`, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getMinStock(supID: string): Observable<MinStock[]> {
        const url = `${this.baseUrl}/api/rpt_minStock/${supID}`;
        return this.http
                .get(url, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getInvSupplier(): Observable<Supplier[]> {
        return this.http
               .get(`${this.baseUrl}/api/rpt_invSupplier`, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getInvStock(supID: string): Observable<MinStock[]> {
        const url = `${this.baseUrl}/api/rpt_invStock/${supID}`;
        return this.http
                .get(url, this.headers)
                // .map(this.mapSaleSummary)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    search(term: string): Observable<Stock[]> {
        return this.http
            .get(`${this.baseUrl}/api/datacollector?name=${term}`)
            .map(response => response.json())
            // .map(response => response.json().data as Stock[])
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    updateStock(stockDetail: Stock) {

            const url = `${this.baseUrl}/api/datacollector/${stockDetail.productID}`;
            // let putHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
            let putHeaders = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({headers: putHeaders});
            return this.http
                .put(url, JSON.stringify(stockDetail), options)
                .map(response => response.json())
                .catch(this.handleError);
     }

    // hero code
    // updateStock(stockDetail: Stock): Promise<Stock> {
    //     const url = `${this.baseUrl}/api/datacollector/${stockDetail.productID}`;
    //     // let putHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    //     let putHeaders = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: putHeaders});
    //     return this.http
    //         .put(url, JSON.stringify(stockDetail), options)
    //         .toPromise()
    //         .then(() => stockDetail)
    //         .catch(this.handleError);
    // }

}