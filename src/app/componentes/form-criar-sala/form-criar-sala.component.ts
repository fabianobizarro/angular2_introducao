import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-criar-sala',
  templateUrl: './form-criar-sala.component.html',
  styleUrls: ['./form-criar-sala.component.css']
})
export class FormCriarSalaComponent implements OnInit {

  constructor(private service: SalaService,
    private router: Router) { }

  formularioSala: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    capacidade: new FormControl('', [Validators.required]),
    possuiProjetor: new FormControl(),
    possuiTv: new FormControl()
  });

  ngOnInit() {
  }

  cadastrarSala() {
    if (this.formularioSala.valid) {

      let form = this.formularioSala.value;

      let sala: Sala = {
        nome: form.nome,
        capacidade: form.capacidade,
        possuiProjetor: form.possuiProjetor,
        possuiTv: form.possuiTv
      }

      this.service.adicionarSala(sala)
        .subscribe(res => {
          this.router.navigate(['/salas']);
        }, err => {
          alert('Não foi possível adicionar a sala');
        });
    }
  }


}
