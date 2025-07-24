import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FavoriteGame } from './favorite-game/favorite-game';
import { Boton } from './boton/boton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Tabs } from "./core/components/tabs/tabs";



@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, InputTextModule, InputTextModule, FavoriteGame, Boton, TableModule, ButtonModule, RouterLink, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-shopping');

  onButtonClick() : void {
    window.alert('ha hecho click');
  }
}

