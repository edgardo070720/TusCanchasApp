import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { VerDeportesComponent } from './ver-deportes/ver-deportes.component';
import { ReservaCanchaDeportivaComponent } from './vista_Cliente/reserva-cancha-deportiva/reserva-cancha-deportiva.component';
import { QuejasOreclamosComponent } from './vista_Cliente/quejas-oreclamos/quejas-oreclamos.component';

import { RegistroLoginComponent } from './vista_Login/registro-login/registro-login.component';
import { LoginComponent } from './vista_Login/login/login.component';
import { InicioPropietarioComponent } from './vista_Propietario/inicio-propietario/inicio-propietario.component';
import { RegistroCanchasDeportivasComponent } from './vista_Propietario/registro-canchas-deportivas/registro-canchas-deportivas.component';
import { ModificarInformacionPropietarioComponent } from './vista_Propietario/modificar-informacion-propietario/modificar-informacion-propietario.component';
import { ModificarCanchaDeportivaComponent } from './vista_Propietario/modificar-cancha-deportiva/modificar-cancha-deportiva.component';
import { InicioAdminComponent } from './vista_Admin/inicio-admin/inicio-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { ConsultarCanchasDeportivasComponent } from './vista_Cliente/consultar-canchas-deportivas/consultar-canchas-deportivas.component';
import { CentroDeAyudaComponent } from './centro-de-ayuda/centro-de-ayuda.component';
import { GestionReservasComponent } from './vista_Propietario/gestion-reservas/gestion-reservas.component';
import { VerCanchasDeportivasTotalesComponent } from './vista_Admin/ver-canchas-deportivas-totales/ver-canchas-deportivas-totales.component';
import { VerReservasAdminComponent } from './vista_Admin/ver-reservas-admin/ver-reservas-admin.component';
import { VerCanchasDeportivasPropietariosAdminComponent } from './vista_Admin/ver-canchas-deportivas-propietarios-admin/ver-canchas-deportivas-propietarios-admin.component';
import { VerQuejasAdminComponent } from './vista_Admin/ver-quejas-admin/ver-quejas-admin.component';
import { VerQuejaInformacionAdminComponent } from './vista_Admin/ver-queja-informacion-admin/ver-queja-informacion-admin.component';
import { VerQuejasPropietarioComponent } from './vista_Propietario/ver-quejas-propietario/ver-quejas-propietario.component';
import { VerQuejaInformacionPropietarioComponent } from './vista_Propietario/ver-queja-informacion-propietario/ver-queja-informacion-propietario.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    VerDeportesComponent,
    ReservaCanchaDeportivaComponent,
    QuejasOreclamosComponent,
    RegistroLoginComponent,
    LoginComponent,
    InicioPropietarioComponent,
    RegistroCanchasDeportivasComponent,
    ModificarInformacionPropietarioComponent,
    ModificarCanchaDeportivaComponent,
    InicioAdminComponent,
    SidebarComponent,
    SidebarAdminComponent,
    ConsultarCanchasDeportivasComponent,
    CentroDeAyudaComponent,
    GestionReservasComponent,
    VerCanchasDeportivasTotalesComponent,
    VerReservasAdminComponent,
    VerCanchasDeportivasPropietariosAdminComponent,
    VerQuejasAdminComponent,
    VerQuejaInformacionAdminComponent,
    VerQuejasPropietarioComponent,
    VerQuejaInformacionPropietarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
