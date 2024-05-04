import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './componentes/tienda/catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { CestaComponent } from './componentes/tienda/cesta/cesta.component';
import { ErrorPersonalizadoComponent } from './util/error-personalizado/error-personalizado.component';
import { LoginComponent } from './componentes/usuarios/login/login.component';
import { LoginGuardian } from './componentes/usuarios/login/login-guardian';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'evento',
    component: CatalogoComponent,
    //      canActivate:[LoginGuardian]
  },
  {
    path: 'inscripcion',
    component: CestaComponent,
    //     canActivate:[LoginGuardian]
  },
  {
    path: 'inscripcion/:id',
    component: CestaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: ErrorPersonalizadoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  // Configura las rutas
  exports: [RouterModule]  // Exporta RouterModule para uso externo
})

export class AppModule { }