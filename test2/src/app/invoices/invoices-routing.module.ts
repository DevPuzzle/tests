import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesListComponent,
    children: [
      {
        path: ':id',
        component: InvoiceDetailsComponent
      },
      {
        path: 'add',
        component: InvoiceComponent
      },
      {
        path: 'edit/:invoiceId',
        component: InvoiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
