import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductolistComponent } from './components/productolist/productolist.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RubrosComponent } from './components/rubros/rubros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductolistComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
