import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filp-card-back',
  template: `
  <div class="filp-card-back">
      <ng-content></ng-content>
</div>
  `,
  styleUrls: ['./filp-card.component.css']
})
export class FilpCardBackComponent{}