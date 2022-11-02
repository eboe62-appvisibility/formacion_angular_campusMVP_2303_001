import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './evento/evento.component';
import { ValienteComponent } from './valiente/valiente.component';
import { FormsModule } from '@angular/forms';
import { InscritosComponent } from './evento/inscritos/inscritos.component';

@NgModule({
  declarations: [
    AppComponent, EventosComponent, EventoComponent, ValienteComponent, InscritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
