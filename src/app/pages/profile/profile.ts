import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  headerservice = inject(HeaderService);

  ngOnInit(): void {
    this.headerservice.titulo.set("Perfil")
  }
}
