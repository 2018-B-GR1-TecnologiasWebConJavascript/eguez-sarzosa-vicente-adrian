import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {


  constructor(
    private readonly _usuarioService: UsuarioServiceService
  ) { }

  ngOnInit() {
  }

}
