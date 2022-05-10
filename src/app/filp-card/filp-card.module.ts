import { FilpCardBackComponent } from './filp-card-back';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilpCardComponent } from './filp-card.component';
import { FilpCardFrontComponent } from './filp-card-front';



@NgModule({
  declarations: [
    FilpCardComponent,FilpCardFrontComponent,FilpCardBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilpCardComponent,FilpCardFrontComponent,FilpCardBackComponent
  ]
})
export class FilpCardModule { }
