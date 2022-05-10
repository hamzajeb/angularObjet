import { FilpCardModule } from './filp-card/filp-card.module';
import { FilpCardComponent } from './filp-card/filp-card.component';
import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import{HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { AOSComponent } from './aos/aos.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    NavbarComponent,
    PhotosComponent,
    AOSComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CarouselModule,
    FilpCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
