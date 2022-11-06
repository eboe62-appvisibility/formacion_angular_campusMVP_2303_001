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

@NgModule({
  declarations: [
    AppComponent, EventosComponent, EventoComponent, ValienteComponent, InscritosComponent, CocheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioValientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
