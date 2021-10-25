import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './componentes/card/card.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { DataProductosComponent } from './componentes/data-productos/data-productos.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';

const routes: Routes = [
  {path:'', redirectTo:'/card', pathMatch:'full'},
  {path:'card', component:CardComponent},
  {path:'inicio', component:InicioComponent},
  {path:'producto/:id', component:ProductoComponent},
  {path:'dataproductos', component:DataProductosComponent},
  {path:'modificar/:id', component:ModificarComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
