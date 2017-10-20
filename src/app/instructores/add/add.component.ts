import { Component, OnInit } from '@angular/core';
import { Instructores } from "../instructores";
import { ServiceInstructoresService } from "../service-instructores.service";

@Component({
  selector: 'instructores-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  instructores:Instructores;
  constructor(private instructoresDataService: ServiceInstructoresService) { }

  ngOnInit() {
    this.instructores = new Instructores(); 
  }

  nuevoInstructor(){
    this.instructores = new Instructores(); 
  }

  agregarInstructores(){
    this.instructoresDataService.crearInstructores(this.instructores);
    this.instructores = new Instructores(); 
  }

}
