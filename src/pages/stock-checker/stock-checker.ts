import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject }           from 'rxjs/Subject';

import { ReportService } from '../../app/report.service';
import { Stock } from '../../app/stock';
import { PresentToast } from '../../app/present-toast';

@Component({
  selector: 'stock-checker',
  templateUrl: 'stock-checker.html'
})
export class DataCollector implements OnInit {
    stocks: Observable<Stock[]>;
    stockDetail: Stock;
    textSearch: string;
    private searchTerms = new Subject<string>();
    constructor(
      private reportService: ReportService,
      private presentToast: PresentToast
      ){}
    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }
    ngOnInit(): void {
      this.stocks = this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
          // return the http search observable
          ? this.reportService.search(term)
          // or the observable of empty heroes if there was no search term
          : Observable.of<Stock[]>([]))
        .catch(error => {
          // TODO: add real error handling
          console.log(error);
          return Observable.of<Stock[]>([]);
        });
    }

    onSelect(select: Stock): void {
      this.stockDetail = select;
    }

    // gotoDetail(detail: Stock): void {
    //   this.reportService.getStockByID(detail.productID)
    //       .then(result => this.stockDetail)
    //       .catch(error => console.log(error));
    // }

    save(): void {
      if (this.stockDetail) {
        if (this.stockDetail.qtyActual != this.stockDetail.qtyNowAll){
          this.reportService.updateStock(this.stockDetail).subscribe(
            result =>{
              // this.stocks = Observable.of<Stock[]>([]);
              this.textSearch = "";
              this.stockDetail = null;
              this.search(this.textSearch)
              this.presentToast.show("บันทึกเรียบร้อย");
            },
            error => {
              this.presentToast.show("เกิดข้อผิดผลาด")
            },
          );
        }
      }
    }


}

