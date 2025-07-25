import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  headerservice = inject(HeaderService);

  ngOnInit(): void {
    this.headerservice.titulo.set("Inicio")
    this.headerservice.conbordes.set(true)
  }

  ngOnDestroy(): void {
    this.headerservice.conbordes.set(false)
  }

}
