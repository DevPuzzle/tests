import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ClientComponent } from './components/client/client.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { AddInvoiceComponent } from '../invoices/components/add-invoice/add-invoice.component';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientsListComponent,
    CompanyComponent,
    CompaniesListComponent,
    CompanyItemComponent,
    CompanyDetailsComponent,
    ClientItemComponent,
    ClientDetailsComponent,
    AddInvoiceComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
