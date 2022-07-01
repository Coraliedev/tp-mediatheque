import { ProductListComponent } from './_pages/products-page/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { NavbarComponent } from './_commons/navbar/navbar.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';

import { ProductCardComponent } from './_pages/products-page/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
