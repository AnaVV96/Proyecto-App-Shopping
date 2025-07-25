import { Component,inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {
  headerservice = inject(HeaderService);

  ngOnInit(): void {
    this.headerservice.titulo.set("Me gusta")
  }

}
