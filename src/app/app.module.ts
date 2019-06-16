import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductolistComponent } from './components/productolist/productolist.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { ProductosService } from './services/productos.service';
import { RubrosComponent } from './components/rubros/rubros.component';
import { CarouselComponent } from './components/inicio/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoFiltroPipe } from './components/productolist/pruductsfilter.pipe';
import { ProductoFiltroPipe2 } from './components/productolist/productsfilter2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductolistComponent,
    NavegacionComponent,
    InicioComponent,
    ContactoComponent,
    RubrosComponent,
    CarouselComponent,
    FooterComponent,
    ProductoFiltroPipe,
    ProductoFiltroPipe2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
