import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-game',
  imports: [FormsModule, CommonModule],
  templateUrl: './favorite-game.html',
  styleUrl: './favorite-game.css'
})
export class FavoriteGame {
 @Input() favGame: string="";
  @Output() prubaboton = new EventEmitter<void>(); 

 onClick(): void {
  this.prubaboton.emit();
 }
}
