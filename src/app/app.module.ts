import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarRejectComponent } from './toolbar-reject/toolbar-reject.component';
import { MainContentRejectComponent } from './main-content-reject/main-content-reject.component';
import { FooterRejectComponent } from './footer-reject/footer-reject.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BootombarRejectComponent } from './bootombar-reject/bootombar-reject.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ToolbarComponent,
    FooterComponent,
    MainContentComponent,
    ToolbarRejectComponent,
    MainContentRejectComponent,
    FooterRejectComponent,
    ButtonsComponent,
    TopbarComponent,
    BootombarRejectComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
