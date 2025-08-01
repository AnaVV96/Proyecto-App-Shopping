import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-account-category',
  imports: [ CommonModule, ButtonModule ],
  templateUrl: './card-account-category.html',
  styleUrl: './card-account-category.css'
})
export class CardAccountCategory {
  @Input() label?: string;
  @Input() icon?: string;

}
