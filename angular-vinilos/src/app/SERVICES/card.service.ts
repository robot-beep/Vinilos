import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CardService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //GETPRODUCTO
  getProducto() {
    return this.http.get(this.url);
  };

  //get producto by id
  getProductoId(id:string){

    return this.http.get<producto[]>(this.url+"/"+id)

  }

  //agregar producto 
  postProducto(producto:any){
    return this.http.post(this.url, producto);
  }

  //eliminar producto 
  deleteProducto(id:string){
    return this.http.delete(this.url+"/"+id);
  }

  //modificar producto 
  editProducto(id:string, producto:any){
    return this.http.put(this.url+"/"+id, producto);
  }


}





//interfaces

export interface producto {
  id_producto?:any;
  titulo?:string;
  autor?: string;
  formato?: string;
  estado?: string;
  descuento?: any;
  valor?: any;
  stock?: any;
  imagen?: any;
  rut_adm_p?:any;
}