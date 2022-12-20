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
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from "./data.services";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'evento', component:EventoComponent},
  {path:'inscripcion', component:InscripcionComponent},
  {path:'registro', component:RegistroComponent},
  {path:'inscripcion/:id', component:InscripcionComponent},
  {path: 'login', component:LoginComponent},
  {path:'**', component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventoComponent,
    ValienteComponent,
    InscritosComponent,
    CocheComponent,
    HomeComponent,
    InscripcionComponent,
    RegistroComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioValientesService, InscritosService, DataServices, LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
