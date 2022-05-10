import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filp-card-front',
  template: `
  <div class="filp-card-front">
      <ng-content></ng-content>
</div>
  `,
  styleUrls: ['./filp-card.component.css']
})
export class FilpCardFrontComponent{}