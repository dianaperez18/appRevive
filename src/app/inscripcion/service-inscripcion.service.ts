import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inscripcion } from "./inscripcion";

@Injectable()
export class ServiceInscripcionService {

  

  constructor(private http: HttpClient) { }


  crearInscripcion(incripcion: Inscripcion){
    const body = {codigoinscripcion: incripcion.codigoinscripcion, nombre: incripcion.nombre, apellido: incripcion.apellido, telefono: incripcion.telefono,
      correo: incripcion.correo, curso:incripcion.curso, valor:incripcion.valor
    };
    this.http.post('http://192.168.2.214:8080/revive/webresources/co.edu.revive.entidades.inscripcion', body)
    .subscribe(data =>{
      alert('La Inscripcion se registro correctamente');
    });
  }
}
