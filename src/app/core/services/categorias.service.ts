import { Injectable } from '@angular/core';
import { categoria } from '../interfaces/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() {}

  async getAll(): Promise<categoria[]> {
    const res = await fetch("assets/data/database.json");
    const resJson = await res.json();
    return resJson;
    }
}
  

