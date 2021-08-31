import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { BodyComponent } from './component/body/body.component';
import { ProductListComponent } from './component/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BodyComponent,
    ProductListComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
