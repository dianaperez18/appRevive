import { Component, OnInit } from '@angular/core';
import { ServiceInscripcionService } from "../service-inscripcion.service";

@Component({
  selector: 'inscripcion-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private inscripcionDataService: ServiceInscripcionService) { }

  ngOnInit() {
    this.inscripcionDataService.cargarInscripcion();
  }

}
