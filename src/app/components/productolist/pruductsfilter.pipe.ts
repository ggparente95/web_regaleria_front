import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'filter1'
})
export class ProductoFiltroPipe implements PipeTransform {

  transform(productos: any[], nameFilter: string): any[] {
    if (!productos || !nameFilter) {
      return productos;
    }

    return productos.filter(producto =>
      producto.nombre.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1
      );

  }
}
