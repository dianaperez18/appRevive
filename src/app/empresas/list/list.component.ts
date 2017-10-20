import { Component, OnInit } from '@angular/core';
import { ServiceEmpresasService } from "../service-empresas.service";

@Component({
  selector: 'empresas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private empresasDataService: ServiceEmpresasService) { }

  ngOnInit() {
    this.empresasDataService.cargarEmpresas();
  }

}
