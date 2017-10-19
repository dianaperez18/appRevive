import { Component, OnInit } from '@angular/core';
import { Clientes } from '../Clientes';

@Component({
  selector: 'clientes-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  clientes:Clientes;
  constructor() { }

  ngOnInit() {
    
    this.clientes = new Clientes(); 
   

    
  }

  nuevoCliente(){
    this.clientes = new Clientes(); 
  }

}
