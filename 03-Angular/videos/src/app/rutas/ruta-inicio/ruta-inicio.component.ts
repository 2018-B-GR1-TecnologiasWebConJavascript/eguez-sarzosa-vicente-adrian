import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  imagenes: Imagenes[] = [
    {
      anio: 2018,
      nombreImagen: '01.jpeg',
      nombrePelicula: 'Avengers'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Imagenes {
  nombreImagen: string;
  nombrePelicula: string;
  anio: number;
}







