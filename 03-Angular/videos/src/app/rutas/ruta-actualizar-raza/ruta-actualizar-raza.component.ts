import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RazaRestService} from '../../servicios/rest/raza-rest.service';
import {Raza} from '../../interfaces/raza';

@Component({
  selector: 'app-ruta-actualizar-raza',
  templateUrl: './ruta-actualizar-raza.component.html',
  styleUrls: ['./ruta-actualizar-raza.component.scss']
})
export class RutaActualizarRazaComponent implements OnInit {

  razaAActualizar: Raza;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _razaRestService: RazaRestService
  ) {
  }

  // Cuando empieza el componente
  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarRaza) => {
          const raza$ = this._razaRestService
            .findOneById(parametros.idRaza);

          raza$
            .subscribe(
              (raza: Raza) => {
                this.razaAActualizar = raza;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );

  }

  buscarRaza(idRaza) {
    const raza$ = this._razaRestService
      .findOneById(idRaza);

    raza$
      .subscribe(
        (raza: Raza) => {
          console.log(raza);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

}

interface ParametrosRutaActualizarRaza {
  idRaza: string;
}



