import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryGoodsRoutingModule } from './inventory-goods-routing.module';
import { InventoryGoodsListComponent } from './components/inventory-goods-list/inventory-goods-list.component';
import { InventoryGoodsComponent } from './components/inventory-goods/inventory-goods.component';
import { InventoryGoodsDetailsComponent } from './components/inventory-goods-details/inventory-goods-details.component';
import { InventoryGoodComponent } from './components/inventory-good/inventory-good.component';

@NgModule({
  declarations: [InventoryGoodsListComponent, InventoryGoodsComponent, InventoryGoodsDetailsComponent, InventoryGoodComponent],
  imports: [
    CommonModule,
    InventoryGoodsRoutingModule
  ]
})
export class InventoryGoodsModule { }
