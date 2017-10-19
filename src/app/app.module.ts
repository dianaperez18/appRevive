import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';
import { CursosModule } from './cursos/cursos.module';
import { InicioModule } from './inicio/inicio.module';

import { MenuComponent } from './menu/menu.component';
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component';

import { IndexComponent as IndexClientesComponent } from './clientes/index/index.component';
import { IndexComponent as IndexCursosComponent  } from './cursos/index/index.component';
import { IndexComponent as IndexInicioComponent  } from './inicio/index/index.component';

const appRoutes:Routes = [

  {path:"clientes/index", component: IndexClientesComponent },
  {path:"cursos/index", component: IndexCursosComponent },
  {path:"inicio/index", component: IndexInicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OpcionSeleccionadaComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    CursosModule,
    InicioModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
