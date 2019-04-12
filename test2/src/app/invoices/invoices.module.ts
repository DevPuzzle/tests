import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceItemComponent } from './components/invoice-item/invoice-item.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';

@NgModule({
  declarations: [InvoicesListComponent, InvoiceComponent, InvoiceItemComponent, InvoiceDetailsComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
