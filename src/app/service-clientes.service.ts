import { Injectable } from '@angular/core';
import { Clientes } from './clientes/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceClientesService {

  clientesLista:Array<Clientes>;

  constructor(private http: HttpClient) { }

  cargarClientes() {
    this.http.get('http://192.168.2.214:8080/revive/webresources/co.edu.revive.entidades.clientes')
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.clientesLista = data as Array<Clientes>;
});

  }

  crearCliente(clientes: Clientes){
    const body = {cedula: clientes.cedula, nombre: clientes.nombre, apellido: clientes.apellidos, telefono: clientes.telefono,
      direccion: clientes.direccion, correo: clientes.correo, profesion:clientes.profesion
    };
    this.http.post('http://192.168.2.214:8080/revive/webresources/co.edu.revive.entidades.clientes', body)
    .subscribe(data =>{
      alert('EL cliente se ha registrado correctamente');
    });
  }

}
