import { Component, OnInit } from '@angular/core';
import { Contrato } from '../domain/contrato';
import { ContratoService } from './services/contrato.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  contratos : Contrato[]; // armazena os contratos do servidor remoto

  constructor(private contratoService : ContratoService) { }

  ngOnInit() {
    this.contratoService.getContratos()
      .subscribe(response => {
        this.contratos = response;
        console.log(response);
      })
  }

  getContratos(){
    this.contratoService.getContratos()
      .subscribe(response => {
        //recebe JSON
        this.contratos = response;
      })
  }


}