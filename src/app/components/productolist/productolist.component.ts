import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productolist',
  templateUrl: './productolist.component.html',
  styleUrls: ['./productolist.component.css'],
  
})
export class ProductolistComponent implements OnInit {

  productos: any = [];
  rubros: any = [];
  tipos: any = [];
  nombreFiltro: string;
  productoFiltro: number = 0;
  productoActual: any;

  constructor(private productoService: ProductosService) { }

  ngOnInit() {

    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
        console.log(res);
      },
      err => {
        console.error(err);
      }

    

    
    )

    this.productoService.getRubros().subscribe(
      res => {
        this.rubros = res;
        console.log(res);
      },
      err => {
        console.error(err);
      }




    )


    this.productoService.getTiposProductos().subscribe(
      res => {
        this.tipos = res;
        console.log(res);
      },
      err => {
        console.error(err);
      }




    )

  }

  infoProducto(id: number) {

    this.productoActual = this.productos.filter(producto => producto.id == id);
  }

}
