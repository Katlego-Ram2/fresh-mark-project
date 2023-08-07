import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ToolBarComponent,
    ProductCategoryComponent,
    SalesHistoryComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
