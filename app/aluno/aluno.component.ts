import { Component, OnInit } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { AlunoService } from './service/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos : Aluno[];

  constructor(private alunoService : AlunoService) { }

  ngOnInit() {
    this.alunoService.getAlunos()
    .subscribe(response => {
      this.alunos = response;
      console.log(response);
    })
  }

  getAlunos() {
    this.alunoService.getAlunos()
    .subscribe(response => {
      this.alunos = response['data'];
    })
  }


}
