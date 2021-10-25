import { Component, OnInit } from '@angular/core';
import { CardService, producto } from 'src/app/SERVICES/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto: producto={
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

  constructor(private cardservice: CardService, private router: Router) {
  }

  ngOnInit(): void {
  }

  agregar() {
    this.cardservice.postProducto(this.producto).subscribe();
    this.router.navigate(["/dataproductos"]);

  }

}
