import { Injectable } from '@angular/core';
import { Empresas } from "./empresas";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceEmpresasService {


  empresasLista:Array<Empresas>;
  constructor(private http: HttpClient) { }

  cargarEmpresas() {
    this.http.get('http://192.168.2.210:8080/revive/webresources/co.edu.revive.entidades.empresas')
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.empresasLista = data as Array<Empresas>;
});

  }

  crearEmpresa(empresas: Empresas){
    const body = {nit: empresas.nit, nombre: empresas.nombre,  telefono: empresas.telefono,
      direccion: empresas.direccion
    };
    this.http.post('http://192.168.2.210:8080/revive/webresources/co.edu.revive.entidades.empresas', body)
    .subscribe(data =>{
      alert('La empresa se  registro correctamente');
      this.cargarEmpresas();
    });
  }

}
