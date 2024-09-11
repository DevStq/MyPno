import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { SettingComponent } from './components/setting/setting.component';
import { LocalserviceComponent } from './components/localservice/localservice.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { PlaceComponent } from './components/place/place.component';
 
@NgModule({
  declarations: [
    AppComponent,
     NavbarComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    SettingComponent,
    LocalserviceComponent,
    HotelComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
