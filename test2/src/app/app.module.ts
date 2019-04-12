import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { InventoryGoodsModule } from './inventory-goods/inventory-goods.module';
import { InvoicesModule } from './invoices/invoices.module';
import { FormStylingDirective } from './shared/directives/form-styling.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormStylingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    InventoryGoodsModule,
    InvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
