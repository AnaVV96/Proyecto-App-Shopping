import { Component, inject} from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CategoriasService } from '../../core/services/categorias.service';
import { categoria } from '../../core/interfaces/categorias';
import { TarjetaCategoria } from '../../core/components/tarjeta-categoria/tarjeta-categoria';
import { CommonModule } from '@angular/common'; 
import { NgFor } from '@angular/common';
import { CardAccountCategory } from '../../core/components/card-account-category/card-account-category';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, TarjetaCategoria, NgFor, CardAccountCategory],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true,
})
export class Profile {
  headerservice = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  categorias:categoria[] = [];

ngOnInit(): void {
  this.headerservice.titulo.set('Perfil');
  this.categoriasService.getAll().then(res => {
    console.log('Categorías cargadas:', res); // 👀 VER EN CONSOLA
    this.categorias = res;
  });
}}
