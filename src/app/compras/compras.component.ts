import { Component, OnInit } from '@angular/core';
import { COMPRAS } from 'c:/Projeto/angular-config/src/app/domain/mock-compras';
import { Compra } from 'c:/Projeto/angular-config/src/app/domain/compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  
  novaCompra: any;
  compras : Compra[] = COMPRAS;
  compra : Compra = new Compra();

  constructor() { }

  ngOnInit() {
  }

  addCompra(){

    let novaCompra = new Compra();
    novaCompra.id = this.compra.id;
    novaCompra.nome = this.compra.nome;
    novaCompra.descricao = this.compra.descricao;
    this.compras.push(novaCompra);
  }
}
