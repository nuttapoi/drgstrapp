import { Component, OnInit } from '@angular/core';
// import { Observable }        from 'rxjs/Observable';
import { ReportService } from '../../app/report.service';


@Component({
  selector: 'report-profit-by-item',
  templateUrl: 'report-profit-by-item.html'
})
export class ReportProfitByItem implements OnInit {
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  fromDate;
  toDate;
//  columns = [
//     { prop: 'businessName', name: 'สินค้า' },
//     { prop: 'itemQTY', name: 'จำนวน' ,maxWidth: 150},   
//     { prop: 'unitNameA', name: 'หน่วย',maxWidth: 150 },
//     { prop: 'sale', name: 'ยอดขาย',maxWidth: 150 },
//     { prop: 'profit', name: 'กำไร',maxWidth: 150 },   
//     { prop: 'profitMargin', name: '%มาร์จิ้น',maxWidth: 150 },    
//   ];

  
  constructor(
    private reportService: ReportService
  ){ 
    this.fromDate = new Date().toISOString();
    this.toDate = new Date().toISOString();
    // this.fromDate = '2017-04-06'
    // this.toDate = '2017-04-06'
  }

  ngOnInit() {
    this.reportService.getProfitByItem(this.fromDate,this.toDate)
      .subscribe(res => this.rows = res)
  }

  getReport(){
    this.reportService.getProfitByItem(this.fromDate,this.toDate)
      .subscribe(res => this.rows = res)    
  }
 }
