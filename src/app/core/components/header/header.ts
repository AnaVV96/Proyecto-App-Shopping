import { Component, effect, inject, signal, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  headerservice = inject(HeaderService);
  claseAplicada = signal("");
  tituloMostrado = signal("");

  escondertitulo = effect(() => {
    if (this.headerservice.titulo()) {
      console.log("ESCONDER")
      this.claseAplicada.set("fade-out");
    }
  }, { allowSignalWrites: true });

  mostrarTituloNuevo(e: AnimationEvent) {
    console.log(e.animationName.includes("fade-out"))
    if (e.animationName.includes("fade-out")) {
      console.log("MOSTRAR")
      this.tituloMostrado.set(this.headerservice.titulo());
      this.claseAplicada.set("fade-in");
      setTimeout(() => this.claseAplicada.set(""), 250);
    }
  }
}


