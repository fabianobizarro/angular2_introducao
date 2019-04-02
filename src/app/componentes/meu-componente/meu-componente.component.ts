import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: string;
  r: number = 255;
  g: number = 255;
  b: Number = 255;

  constructor() { }

  ngOnInit() {
  }

  inverterNome() {
    if (this.nome != null) {
      this.nome = this.nome.split("").reverse().join("");
    }
  }

  estiloFundo() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

}
