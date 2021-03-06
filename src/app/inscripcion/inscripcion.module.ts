import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { ServiceInscripcionService } from "./service-inscripcion.service";

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [IndexComponent, AddComponent, ListComponent],
  providers:[ServiceInscripcionService]
})
export class InscripcionModule { }
