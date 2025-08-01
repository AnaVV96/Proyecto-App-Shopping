import { Component, Input } from '@angular/core';
import { categoria } from '../../interfaces/categorias';
import{ CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-tarjeta-categoria',
  imports: [CommonModule, Button],
  templateUrl: './tarjeta-categoria.html',
  styleUrl: './tarjeta-categoria.css',
  standalone: true,
})
export class TarjetaCategoria {
  @Input({ required: true }) categoria!: Partial<categoria>;

  
constructor() {
  this.categoria = { nombre: '', fotoUrl: '', color: '#ffffff' } as Partial<categoria>;
}
}
