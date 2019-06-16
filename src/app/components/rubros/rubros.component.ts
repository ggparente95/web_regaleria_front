import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css']
})
export class RubrosComponent implements OnInit {

  rubros: any = []

  constructor(private productosService: ProductosService) { }

  ngOnInit() {

    this.productosService.getRubros().subscribe(
      res => {
        this.rubros = res;
      },
      err => {
        console.error(err);
      }
      )
   }
}
