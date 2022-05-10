import { Component, OnInit } from '@angular/core';
import { FilpCardBackComponent } from './filp-card-back';
import { FilpCardFrontComponent } from './filp-card-front';

@Component({
  selector: 'app-filp-card',
  templateUrl: './filp-card.component.html',
  styleUrls: ['./filp-card.component.css']
})
export class FilpCardComponent implements OnInit {
  toggleProperty = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.toggleProperty=!this.toggleProperty;
  }

}
