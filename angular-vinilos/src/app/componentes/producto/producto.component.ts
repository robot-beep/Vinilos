import { Component, OnInit } from '@angular/core';
import { CardService, producto } from 'src/app/SERVICES/card.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})



export class ProductoComponent implements OnInit {

  Card: producto[];
  constructor(private CardService: CardService, private router: Router, private activeroute: ActivatedRoute) {
    this.Card=[];
   }

  ngOnInit(): void {
    const id_entrada = this.activeroute.snapshot.params.id;
    this.listarEquipo(id_entrada);
  }

  listarEquipo(id:string){
    this.CardService.getProductoId(id).subscribe(
      res=>{
        this.Card=<any>res;
        console.log(this.Card)
      },
      err=> console.log(err)
    )
  };

}
