import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyComponent } from './components/company/company.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientComponent } from './components/client/client.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesListComponent,
  },
  {
    path: ':companyId',
    component: CompanyDetailsComponent
  },
  {
    path: 'add',
    component: CompanyComponent
  },
  {
    path: 'edit/:companyId',
    component: CompanyComponent
  },
  {
    path: ':companyId/clients',
    component: ClientsListComponent
  },
  {
    path: ':companyId/clients/:clientId',
    component: ClientDetailsComponent
  },
  {
    path: ':companyId/clients/add',
    component: ClientComponent
  },
  {
    path: ':companyId/clients/edit/:clientId',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
