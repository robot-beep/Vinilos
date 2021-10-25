import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService, producto } from '../../SERVICES/card.service';




@Component({
  selector: 'app-data-productos',
  templateUrl: './data-productos.component.html',
  styleUrls: ['./data-productos.component.css']
})


export class DataProductosComponent implements OnInit {

  card: producto[];
  constructor(private cardservice:CardService, private router:Router) {
    this.card=[];
   }

  ngOnInit(): void {
    this.listarProducto();
  }


  listarProducto(){
    this.cardservice.getProducto().subscribe(
      res=> {
        this.card=<any>res;
        console.log(this.card);
      },
      err =>{console.log(err)}
    )
  }

  eliminar(id:any){
    this.cardservice.deleteProducto(id).subscribe(
      res=>{
        console.log("producto eliminado")
      },
      err=> console.log(err)
    );
    this.listarProducto();
  }

  modificar(id:any){
    this.router.navigate(['/modificar/'+ id]);
    this.listarProducto();
  }

}
