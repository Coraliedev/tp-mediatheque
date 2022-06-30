import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';

const routes: Routes = [
  {path: 'app-home-page', component: HomePageComponent},
  {path:'app-products-page', component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
