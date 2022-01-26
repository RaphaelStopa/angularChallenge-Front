import { AddProductComponent } from './layout/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PoliticalComponent } from './layout/product/product.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpInterceptorProviders } from './http-interceptors/';
import { BaseComponent } from './layout/base/base.component';
import { PurchaseItemComponent } from './layout/purchase-item/purchase-item.component';
import { SaleComponent } from './layout/sale/sale.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoliticalComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    BaseComponent,
    AddProductComponent,
    PurchaseItemComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
