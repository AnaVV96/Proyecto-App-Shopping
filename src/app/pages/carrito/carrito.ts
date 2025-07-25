import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  headerservice = inject(HeaderService);

  ngOnInit(): void {
    this.headerservice.titulo.set("Carrito")
  }
}
