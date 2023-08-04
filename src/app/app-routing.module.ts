import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:AppComponent
  },


  {
    path:"main",component:MainContentComponent
  },

  {
    path:"Productlisting",component:ProductlistingComponent
  },

  {
    path:"ProductDetails",component:ProductDetailsComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
