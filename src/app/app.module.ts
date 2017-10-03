import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';
import { MenuComponent } from './menu/menu.component';
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionSeleccionadaComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
