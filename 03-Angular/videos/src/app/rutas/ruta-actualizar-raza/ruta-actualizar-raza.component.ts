import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';

@Component({
  selector: 'app-ruta-actualizar-raza',
  templateUrl: './ruta-actualizar-raza.component.html',
  styleUrls: ['./ruta-actualizar-raza.component.scss']
})
export class RutaActualizarRazaComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razaRestService:RazaRestService
  ) { }

  // Cuando empieza el componente
  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros)=>{

        }
      )

  }

}





