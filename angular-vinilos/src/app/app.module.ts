import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { InicioComponent } from './componentes/inicio/inicio.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './componentes/producto/producto.component';
import { DataProductosComponent } from './componentes/data-productos/data-productos.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InicioComponent,
    ProductoComponent,
    DataProductosComponent,
    ModificarComponent,
    EliminarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
