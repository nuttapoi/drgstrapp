import { Component , OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemStockPage } from '../item-details/item-details';
import { ReportService } from '../../app/report.service';
import { Supplier } from '../../app/supplier';

@Component({
  selector: 'page-list',
  templateUrl: 'list-supplier2.html'
})
export class ReportInventory implements OnInit{
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;
  suppliers : Supplier[]
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private reportService: ReportService) {}
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];

  //   this.items = [];
  //   for(let supplier in this.suppliers) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  itemTapped(event, item) {
    this.navCtrl.push(ItemStockPage, {
      item: item
    });
  }

  ngOnInit() {
    this.reportService.getInvSupplier()
      .subscribe(res => this.suppliers = res)
  }
}
