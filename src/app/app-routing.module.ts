import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { SistemasComponent } from './Components/sistemas/sistemas.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ThomasComponent } from './Components/thomas/thomas.component';

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'inicio', component : InicioComponent},
  {path : 'servicios', component : ServiciosComponent},
  {path : 'sistemas', component : SistemasComponent},
  {path : 'sobre-mi', component : SobreMiComponent},
  {path : 'tngeygmjdnp', component: ThomasComponent},
  {path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
