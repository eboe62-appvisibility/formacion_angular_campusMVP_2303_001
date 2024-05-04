import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/maquetacion/cabecera/cabecera.component';
import { MenuComponent } from './componentes/tienda/menu/menu.component';
import { MaquetacionTiendaComponent } from './componentes/maquetacion/maquetacion-tienda/maquetacion-tienda.component';
import { PieComponent } from './componentes/maquetacion/pie/pie.component';
import { PerfilComponent } from './componentes/usuarios/perfil/perfil.component';
import { CatalogoComponent } from './componentes/tienda/catalogo/catalogo.component';
import { ValienteComponent } from './modelo/entidades/valiente.component';
import { FormsModule } from '@angular/forms';
import { InscritosComponent } from './evento/inscritos/inscritos.component';
import { CocheComponent } from './evento/coche/coche.component';
import { ServicioValientesService } from './servicio-valientes.service';
import { InscritosService } from './evento/inscritos.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CestaComponent } from './componentes/tienda/cesta/cesta.component';
import { PedidosComponent } from './componentes/tienda/pedidos/pedidos.component';
import { ErrorPersonalizadoComponent } from './util/error-personalizado/error-personalizado.component';
import { ServicioAutenticacion } from './servicios/servicio-autenticacion';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { LoginService } from './componentes/usuarios/login/login.service';
import { CookieService } from 'ngx-cookie-service'
import { LoginGuardian } from './componentes/usuarios/login/login-guardian';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'perfil', component:PerfilComponent, canActivate:[LoginGuardian]},
  {path:'catalogo', component:CatalogoComponent, canActivate:[LoginGuardian]},
  {path:'cesta', component:CestaComponent, canActivate:[LoginGuardian]},
  {path:'pedidos', component:PedidosComponent, canActivate:[LoginGuardian]},
  {path:'inscripcion/:id', component:CestaComponent},
  {path: 'login', component:LoginComponent},
  {path:'**', component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    MaquetacionTiendaComponent,
    PieComponent,
    CatalogoComponent,
    CestaComponent,
    PedidosComponent,
    PerfilComponent,
    ValienteComponent,
    InscritosComponent,
    CocheComponent,
    HomeComponent,
    CestaComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioValientesService, InscritosService, ServicioAutenticacion, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})

export class AppModule { }
