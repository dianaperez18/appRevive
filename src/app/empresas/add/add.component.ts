import { Component, OnInit } from '@angular/core';
import { ServiceEmpresasService } from "../service-empresas.service";
import { Empresas } from "../empresas";

@Component({
  selector: 'empresas-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  empresas:Empresas;

  constructor(private EmpresasDataService: ServiceEmpresasService) { }

  ngOnInit() {

    this.empresas = new Empresas(); 
  }

  nuevoEmpresa(){
    this.empresas = new Empresas(); 
  }

  agregarEmpresas(){
    this.EmpresasDataService.crearEmpresa(this.empresas);
    this.empresas = new Empresas();
  }

}
