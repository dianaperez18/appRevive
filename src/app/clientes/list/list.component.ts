import { Component, OnInit } from '@angular/core';
import { ServiceClientesService } from "../../service-clientes.service";

@Component({
  selector: 'clientes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private clientesDataService: ServiceClientesService ) { }

  ngOnInit() {
    this.clientesDataService.cargarClientes();

  }

}
