import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './evento/evento.component';
import { ValienteComponent } from './valiente/valiente.component';
import { FormsModule } from '@angular/forms';
import { InscritosComponent } from './evento/inscritos/inscritos.component';
import { CocheComponent } from './evento/coche/coche.component';
import { ServicioValientesService } from './servicio-valientes.service';
import { InscritosService } from './evento/inscritos.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { RegistroComponent } from './registro/registro.component';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'evento', component:EventoComponent},
  {path:'inscripcion', component:InscripcionComponent},
  {path:'registro', component:RegistroComponent}
]

@NgModule({
  declarations: [
    AppComponent, EventosComponent, EventoComponent, ValienteComponent, InscritosComponent, CocheComponent, HomeComponent, InscripcionComponent, RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioValientesService, InscritosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
