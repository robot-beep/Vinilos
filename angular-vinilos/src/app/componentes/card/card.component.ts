import { Component, OnInit } from '@angular/core';
import {CardService, producto} from '../../SERVICES/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  Card: producto[];
  constructor(private CardService:CardService, private router:Router) {
    this.Card=[];
   }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto(){
    this.CardService.getProducto().subscribe(
      res=> {
        this.Card=<any>res;
        console.log(this.Card);
      },
      err =>{console.log(err)}
    )
  }

  

}
