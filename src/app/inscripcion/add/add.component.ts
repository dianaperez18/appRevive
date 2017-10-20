import { Component, OnInit } from '@angular/core';
import { Inscripcion } from "../inscripcion";
import { ServiceInscripcionService } from "../service-inscripcion.service";

@Component({
  selector: 'inscripcion-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  inscripcion:Inscripcion;

  constructor(private inscripcionDataService: ServiceInscripcionService) { }

  ngOnInit() {
    this.inscripcion = new Inscripcion(); 
  }

  nuevaInscripcion(){
    this.inscripcion = new Inscripcion(); 
  }

  agregarInscripcion(){
    this.inscripcionDataService.crearInscripcion(this.inscripcion);
    this.inscripcion = new Inscripcion();
  }

}
