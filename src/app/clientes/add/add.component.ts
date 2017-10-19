import { Component, OnInit } from '@angular/core';
import { Clientes } from '../Clientes';
import { ServiceClientesService } from "../../service-clientes.service";

@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  clientes:Clientes;
  constructor(private clientesDataService: ServiceClientesService) { }

  ngOnInit() {
    
    this.clientes = new Clientes(); 
   

    
  }

  nuevoCliente(){
    this.clientes = new Clientes(); 
  }

  agregarCliente(){
    this.clientesDataService.crearCliente(this.clientes);
    this.clientes = new Clientes();
  }

}
