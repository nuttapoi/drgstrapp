import { Component, OnInit } from '@angular/core';
// import { Observable }        from 'rxjs/Observable';
import { ReportService } from '../../app/report.service';
// import { UrlService } from '../../app/url-service';
@Component({
  selector: 'report-profit',
  templateUrl: 'report-profit.html'
})
export class ReportProfit implements OnInit {
  // rows : SaleSummary = [];
  // sales : SaleSummary[];
  // suppliers : Supplier[];
  fromDate;
  toDate;
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  // serverName: String;

  // columns = [
  //   // { prop: 'period', name: 'วันที่' },
  //   { prop: 'customerCount', name: 'ลูกค้า' },   
  //   { prop: 'sale', name: 'ยอดขาย' },
  //   { prop: 'profit', name: 'กำไร' },
  //   { prop: 'cost', name: '%มาร์จิ้น' },
  //   { prop: 'wholeSale', name: '%มาร์จิ้น' },  
  //   { prop: 'costExpire', name: '%มาร์จิ้น' }
  // ];
  
  constructor(
    private reportService: ReportService
   ){ 
    this.fromDate = new Date().toISOString();
    this.toDate = new Date().toISOString();
    // this.fromDate = '2017-04-06'
    // this.toDate = '2017-04-06'
  }

  ngOnInit() {
    this.reportService.getProfitReport(this.fromDate,this.toDate)
      .subscribe(res => this.rows = res)
  }

  getReport() {
    this.reportService.getProfitReport(this.fromDate,this.toDate)
      .subscribe(res => this.rows = res)
    // this.presentToast.show(this.reportService.GetUrl())

  }
 }
