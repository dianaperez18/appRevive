import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { ClientesModule } from './clientes/clientes.module';
import { CursosModule } from './cursos/cursos.module';
import { InicioModule } from './inicio/inicio.module';
import { InstructoresModule } from './instructores/instructores.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';

import { MenuComponent } from './menu/menu.component';
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component';

import { IndexComponent as IndexClientesComponent } from './clientes/index/index.component';
import { IndexComponent as IndexCursosComponent  } from './cursos/index/index.component';
import { IndexComponent as IndexInicioComponent  } from './inicio/index/index.component';
import { IndexComponent as IndexInstructoresComponent  } from './instructores/index/index.component';
import { IndexComponent as IndexInscripcionComponent  } from './inscripcion/index/index.component';

const appRoutes:Routes = [

  {path:"clientes/index", component: IndexClientesComponent },
  {path:"cursos/index", component: IndexCursosComponent },
  {path:"inicio/index", component: IndexInicioComponent },
  {path:"instructores/index", component: IndexInstructoresComponent },
  {path:"inscripcion/index", component: IndexInscripcionComponent }
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
    InstructoresModule,
    InscripcionModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
