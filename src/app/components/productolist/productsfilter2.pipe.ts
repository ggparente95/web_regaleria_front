import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'filter2'
})
export class ProductoFiltroPipe2 implements PipeTransform {

  transform(productos: any[], productFilter: number): any[] {
    if (!productos || !productFilter || productFilter==0) {
      return productos;
    }

    return productos.filter(producto =>
      producto.producto_id == productFilter
    );

  }
}
