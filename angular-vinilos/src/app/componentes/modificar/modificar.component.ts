import { Component, OnInit } from '@angular/core';
import {CardService, producto} from '../../SERVICES/card.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})


export class ModificarComponent implements OnInit {

  product : producto={
    id_producto: 0,
    titulo: '',
    autor: '',
    formato: '',
    estado: '',
    descuento: 0,
    valor: 0,
    stock: 0,
    imagen: '',
    rut_adm_p: '' 
    };

  productModify : producto={
    id_producto: 0,
    titulo: '',
    autor: '',
    formato: '',
    estado: '',
    descuento: 0,
    valor: 0,
    stock: 0,
    imagen: '',
    rut_adm_p: '' 
    };

  constructor(private cardservide:CardService, private router:Router, private activatedroute:ActivatedRoute) {
  }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedroute.snapshot.params.id;
    console.log(id_entrada)

    if(id_entrada){
      this.cardservide.getProductoId(id_entrada).subscribe(
        res=>{
          this.productModify = res[0];
          console.log(res[0])
          console.log(this.productModify.titulo)
        },
        err=> console.log(err)
      )
    }
  }

  modificar(id:any){
    this.cardservide.editProducto(this.productModify.id_producto, this.productModify).subscribe(
      res=>{
        console.log(res);
      },
      err=> console.log(err)
    )
    this.router.navigate(["/dataproductos"])

  }
  

}
