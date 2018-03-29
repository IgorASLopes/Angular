import { Component, OnInit } from '@angular/core';
import { Amigo } from 'c:/Projeto/angular-config/src/app/domain/amigo';
import { AMIGOS } from 'c:/Projeto/angular-config/src/app/domain/mock-amigo';

@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.component.html',
  styleUrls: ['./amigo.component.css']
})
export class AmigoComponent implements OnInit {
  novoAmigo: any;

  amigos : Amigo[] = AMIGOS;
  amigo : Amigo = new Amigo();

  constructor() { }

  ngOnInit() {
  }
  
  addAmigo(){
 
    let novoAmigo = new Amigo();
    novoAmigo.id = this.amigo.id;
    novoAmigo.nome = this.amigo.nome;
    novoAmigo.dataNascimento = this.amigo.dataNascimento;
    this.amigos.push(novoAmigo);
  }
}
