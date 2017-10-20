import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ServiceInstructoresService } from './service-instructores.service';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [IndexComponent, AddComponent, ListComponent],
  providers:[ServiceInstructoresService]
})
export class InstructoresModule { }
