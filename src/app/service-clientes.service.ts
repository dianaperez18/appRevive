import { Injectable } from '@angular/core';
import { Clientes } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceClientesService {

  clientesLista:Array<Clientes>;

  constructor(private http: HttpClient) { }

  cargarClientes() {
    this.http.get('http://192.168.2.218:8080/revive/webresources/co.edu.revive.entidades.clientes')
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.clientesLista = data as Array<Clientes>;
});

  }

}
