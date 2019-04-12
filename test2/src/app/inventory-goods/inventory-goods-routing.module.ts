import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryGoodsListComponent } from './components/inventory-goods-list/inventory-goods-list.component';
import { InventoryGoodsDetailsComponent } from './components/inventory-goods-details/inventory-goods-details.component';
import { InventoryGoodComponent } from './components/inventory-good/inventory-good.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryGoodsListComponent,
    children: [
      {
        path: ':id',
        component: InventoryGoodsDetailsComponent
      },
      {
        path: 'add',
        component: InventoryGoodComponent
      },
      {
        path: 'edit/:invoiceId',
        component: InventoryGoodComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryGoodsRoutingModule { }
