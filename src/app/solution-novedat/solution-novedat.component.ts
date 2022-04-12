import { Component, OnInit, Type } from '@angular/core';

interface datoConsulta {
  fechaReclamo: string,
  NumeroReclamo: string,
  numIdEntidad: string,
  NumIdCiudadano: string,
  TipoIdCiudadano: string,
  PrimerNombre: string,
  SegundoNombre: string,
  PrimerApellido: string,
  SegundoApellido: string,
  Correo: string,
  TipoArchivo: string,
  Accion: string
}

@Component({
  selector: 'app-solution-novedat',
  templateUrl: './solution-novedat.component.html',
  styleUrls: ['./solution-novedat.component.css'],
})
export class SolutionNovedatComponent implements OnInit {
  mostrarTabla: boolean;

  datosResultadoTabla: Array<datoConsulta>;

  constructor() {
    this.mostrarTabla = false;
    this.datosResultadoTabla = [
      {
        fechaReclamo: "2022-03-10  11:44:18",
        NumeroReclamo: "42141534",
        numIdEntidad: "12431241",
        NumIdCiudadano: "3457645523",
        TipoIdCiudadano: "CC",
        PrimerNombre: "Carlos",
        SegundoNombre: "Enrique",
        PrimerApellido: "Piñeros",
        SegundoApellido: "Gacha",
        Correo: "carlos.gacha@gacha.com",
        TipoArchivo: "zip",
        Accion: "www.google.com"
      }
    ]
  }

  ngOnInit(): void {}

  mostrarTablaResultados(){
    this.mostrarTabla = true;
  }
}
