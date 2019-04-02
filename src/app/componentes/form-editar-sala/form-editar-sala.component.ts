import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sala } from 'src/app/models/sala';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-form-editar-sala',
  templateUrl: './form-editar-sala.component.html',
  styleUrls: ['./form-editar-sala.component.css']
})
export class FormEditarSalaComponent implements OnInit {

  formularioSala: FormGroup = this.inicializarFormulario(null);

  salaId: number;
  sala: Sala;

  constructor(private activatedRoute: ActivatedRoute,
    private service: SalaService,
    private router: Router) { }

  ngOnInit() {
    this.salaId = this.activatedRoute.snapshot.params['id'];

    this.service.obterSala(this.salaId)
      .subscribe(s => {
        this.sala = s;
        this.formularioSala = this.inicializarFormulario(s);
      }, err => {
        alert('Sala não encontrada');
        this.router.navigate(['/salas']);
      });
  }

  inicializarFormulario(sala?: Sala) {
    if (sala) {
      return new FormGroup({
        nome: new FormControl(sala.nome, [Validators.required]),
        capacidade: new FormControl(sala.capacidade, [Validators.required]),
        possuiProjetor: new FormControl(sala.possuiProjetor),
        possuiTv: new FormControl(sala.possuiTV)
      });
    }
    else {
      return new FormGroup({});
    }
  }

  atualizarSala() {
    if (this.formularioSala.valid) {

      let form = this.formularioSala.value;

      let sala: Sala = {
        nome: form.nome,
        capacidade: form.capacidade,
        possuiProjetor: form.possuiProjetor || false,
        possuiTV: form.possuiTv || false
      }

      this.service.editarSala(this.salaId, sala)
        .subscribe(res => {
          alert('dados atualizados com sucesso');
          this.router.navigate(['/salas']);
        }, err => {
          alert('Não foi possível atualizar a sala');
          console.log(err)
        });
    }
  }

}
