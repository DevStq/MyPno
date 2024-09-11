import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { SettingComponent } from './components/setting/setting.component';
import { LocalserviceComponent } from './components/localservice/localservice.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { PlaceComponent } from './components/place/place.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent }, // Route to news page
  { path: 'settings', component: SettingComponent }, 
  { path: 'localService', component: LocalserviceComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'places', component: PlaceComponent },  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
