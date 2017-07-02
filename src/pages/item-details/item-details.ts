import { Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ReportService } from '../../app/report.service';
import { Supplier } from '../../app/supplier';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemStockPage implements OnInit{
  selectedItem: Supplier;
  rpt: string;
  rows = [];
  pageTitle: string;
  
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  // columns = [
  //   { prop: 'businessName', name: 'Product Name' },
  //   { prop: 'qtyNowAll', name: 'Quantity' },
  //   { prop: 'unitNameA', name: 'Unit' },
  //   { prop: 'latestCost', name: 'Lastest Cost' }
  // ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private reportService: ReportService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.rpt = navParams.get('rpt');
  }

  ngOnInit() {
    if (this.rpt == "rpt1") {    
      this.reportService.getMinStock(this.selectedItem.id)
      .subscribe(res => this.rows = res)
      this.pageTitle = "สินค้าถึงจุดสั่ง"
    } else {
      this.reportService.getInvStock(this.selectedItem.id)
      .subscribe(res => this.rows = res)
      this.pageTitle = "สินค้าในคลัง"
    }
  }
}
