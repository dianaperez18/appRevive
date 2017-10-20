import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructores } from "./instructores";

@Injectable()
export class ServiceInstructoresService {

  instructoresLista:Array<Instructores>;

  constructor(private http: HttpClient) { }

  cargarInstructores() {
    this.http.get('http://192.168.2.214:8080/revive/webresources/co.edu.revive.entidades.instructores')
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.instructoresLista = data as Array<Instructores>;
});

}

crearInstructores(instructores: Instructores){alert(instructores.curso)
  const body = {cedula: instructores.cedula, nombre: instructores.nombre, apellido: instructores.apellido, telefono: instructores.telefono,
    direccion: instructores.direccion, correo: instructores.correo, profesion: instructores.profesion, curso: instructores.curso
  };
  this.http.post('http://192.168.2.214:8080/revive/webresources/co.edu.revive.entidades.instructores', body)
  .subscribe(data =>{
    alert('EL Instructor se ha registrado correctamente');
  });
}

}
