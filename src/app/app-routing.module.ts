import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerDeportesComponent } from './ver-deportes/ver-deportes.component';
import { InicioAdminComponent } from './vista_Admin/inicio-admin/inicio-admin.component';
import { VerCanchasDeportivasPropietariosAdminComponent } from './vista_Admin/ver-canchas-deportivas-propietarios-admin/ver-canchas-deportivas-propietarios-admin.component';
import { VerCanchasDeportivasTotalesComponent } from './vista_Admin/ver-canchas-deportivas-totales/ver-canchas-deportivas-totales.component';
import { VerQuejaInformacionAdminComponent } from './vista_Admin/ver-queja-informacion-admin/ver-queja-informacion-admin.component';
import { VerQuejasAdminComponent } from './vista_Admin/ver-quejas-admin/ver-quejas-admin.component';
import { VerReservasAdminComponent } from './vista_Admin/ver-reservas-admin/ver-reservas-admin.component';
import { ConsultarCanchasDeportivasComponent } from './vista_Cliente/consultar-canchas-deportivas/consultar-canchas-deportivas.component';
import { QuejasOreclamosComponent } from './vista_Cliente/quejas-oreclamos/quejas-oreclamos.component';
import { ReservaCanchaDeportivaComponent } from './vista_Cliente/reserva-cancha-deportiva/reserva-cancha-deportiva.component';
import { LoginComponent } from './vista_Login/login/login.component';

import { RegistroLoginComponent } from './vista_Login/registro-login/registro-login.component';
import { GestionReservasComponent } from './vista_Propietario/gestion-reservas/gestion-reservas.component';
import { InicioPropietarioComponent } from './vista_Propietario/inicio-propietario/inicio-propietario.component';
import { ModificarCanchaDeportivaComponent } from './vista_Propietario/modificar-cancha-deportiva/modificar-cancha-deportiva.component';
import { ModificarInformacionPropietarioComponent } from './vista_Propietario/modificar-informacion-propietario/modificar-informacion-propietario.component';
import { RegistroCanchasDeportivasComponent } from './vista_Propietario/registro-canchas-deportivas/registro-canchas-deportivas.component';
import { VerQuejaInformacionPropietarioComponent } from './vista_Propietario/ver-queja-informacion-propietario/ver-queja-informacion-propietario.component';
import { VerQuejasPropietarioComponent } from './vista_Propietario/ver-quejas-propietario/ver-quejas-propietario.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Vista Deportes',
    component: VerDeportesComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Quejas o Reclamos',
    component: QuejasOreclamosComponent
  },
  {
    path: 'Reserva Cancha Deportiva',
    component: ReservaCanchaDeportivaComponent
  },

  {
    path: 'Consulta reserva Cancha Deportiva',
    component: ConsultarCanchasDeportivasComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Registro Login',
    component: RegistroLoginComponent
  },
  {
    path: 'Inicio Propietario',
    component: InicioPropietarioComponent
  },
  {
    path: 'Ver Quejas O Reclamos Propietario',
    component: VerQuejasPropietarioComponent
  },
  {
    path: 'Gestion Reservas',
    component: GestionReservasComponent
  },
  {
    path: 'Modificar Informacion Propietario',
    component: ModificarInformacionPropietarioComponent
  },
  {
    path: 'Añadir Cancha Deportiva',
    component: RegistroCanchasDeportivasComponent
  },

  {
    path: 'Modificar Cancha Deportiva',
    component: ModificarCanchaDeportivaComponent
  },
  
  {
    path: 'Ver Información Quejas O Reclamos Propietario',
    component: VerQuejaInformacionPropietarioComponent
  },

  {
    path: 'Inicio Admin',
    component: InicioAdminComponent
  },
  
  {
    path: 'Ver Canchas Deportivas Totales',
    component: VerCanchasDeportivasTotalesComponent
  },
  
  {
    path: 'Ver Canchas Deportivas De Propietario',
    component: VerCanchasDeportivasPropietariosAdminComponent
  },
  
  {
    path: 'Ver Reservas Admin',
    component: VerReservasAdminComponent
  },
  {
    path: 'Ver Quejas O Reclamos Admin',
    component: VerQuejasAdminComponent
  },
  {
    path: 'Ver Información Quejas O Reclamos Admin',
    component: VerQuejaInformacionAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
