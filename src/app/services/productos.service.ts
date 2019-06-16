import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getRubros() {
    return this.http.get(`${this.API_URI}/rubros/`);
  }

  getProductos() {

     return this.http.get(`${this.API_URI}/productos/`); 
  }

  getTiposProductos() {

    return this.http.get(`${this.API_URI}/tiposproductos/`);
  }

  getProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  


}


