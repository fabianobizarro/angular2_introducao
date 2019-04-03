import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/services/sala.service';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css'],
})
export class SalasComponent implements OnInit {

  listaSalas: Sala[] = [];
  loading: boolean = true;

  constructor(private service: SalaService) { }

  ngOnInit() {
    this.carregarSalas();
  }

  carregarSalas() {
    this.loading = true;
    this.service.obterSalas()
      .subscribe(res => {
        this.listaSalas = res;
      }, err => {
        alert('Ocorreu um erro ao carregas as salas');
        console.log(err);
      })
      .add(() => this.loading = false);
  }

  excluirSala(id: number) {
    if (confirm('Deseja exlcuir esta sala?')) {
      this.service.excluirSala(id)
        .subscribe(_ => {
          this.listaSalas = this.listaSalas.filter(p => p.id != id);
        }, err => {
          alert("Não foi possível excluir esta sala");
          console.log(err);
        })
    }
  }

}
