
import { FilpCardComponent } from './filp-card/filp-card.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { PhotosComponent } from './photos/photos.component';
import { AOSComponent } from './aos/aos.component';
import { CountdownComponent } from './countdown/countdown.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"add",component:AddComponent},
  {path:"photo",component:PhotosComponent},
  {path:"card",component:FilpCardComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"AOS",component:AOSComponent},
  {path:"countdown",component:CountdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
