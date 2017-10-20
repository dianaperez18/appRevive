import { Component, OnInit } from '@angular/core';
import { ServiceInstructoresService } from "../service-instructores.service";

@Component({
  selector: 'instructores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private instructoresDataService: ServiceInstructoresService) { }

  ngOnInit() {
    this.instructoresDataService.cargarInstructores();
  }

}
