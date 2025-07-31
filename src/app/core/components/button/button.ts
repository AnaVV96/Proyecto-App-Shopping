import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-button',
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() label?: string;
  @Input() level: 'primary' | 'secondary' = 'primary';
  @Input() color?: string;
  @Input() size: 'large' | 'small' = 'large';
  @Input() type?: 'outline' | 'link';
  @Input() disabled: boolean = false;
  @Input() icon?: string;
  @Input() iconOnly: boolean = false;
  @Input() iconColor: string = 'inherit';





  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

}
