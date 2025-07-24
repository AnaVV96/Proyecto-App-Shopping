import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { event } from '@primeuix/themes/aura/timeline';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {

  constructor( private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
      console.log("EVENTO",event)
      switch (event.urlAfterRedirects){
        case "":
          this.seleccionado = [true,false,false,false,false];
          break;
        case "/wishlist":
          this.seleccionado = [false,true,false,false,false];
          break;
        case "/profile":
          this.seleccionado = [false,false,false,true,false];
          break;
        case "/carrito":
          this.seleccionado = [false,false,false,false,true];
          break;
        default:
          this.seleccionado = [false,false,false,false,false];
          break;
      }
      }
    })
  }

  seleccionado:[boolean,boolean,boolean,boolean,boolean] = [false,false,false, false, false];

  navegar(direccion:string){
    //cambiar la página
    this.router.navigate([direccion])
    console.log(direccion)
  }
}
