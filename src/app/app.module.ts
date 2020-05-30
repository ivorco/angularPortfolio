
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { EnvironmentSelectorComponent } from './environment-selector/environment-selector.component';
import { PhotosComponent } from './photos/photos.component';
import { AppsComponent } from './apps/apps.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroComponent,
    EnvironmentSelectorComponent,
    PhotosComponent,
    AppsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
