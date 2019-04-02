import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Sala } from '../models/sala';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }


  get baseUrl() {
    return environment.apiEndpoint + '/api/sala';
  }

  obterSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.baseUrl);
  }

  obterSala(id: number): Observable<Sala> {
    let url = this.baseUrl + '/' + id;
    return this.http.get<Sala>(url);
  }

  adicionarSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.baseUrl, sala);
  }

  editarSala(idSala: number, sala: Sala): Observable<Sala> {
    let url = this.baseUrl + '/' + idSala;
    return this.http.put<Sala>(url, sala);
  }

  excluirSala(idSala: number): Observable<any> {
    let url = this.baseUrl + '/' + idSala;
    return this.http.delete(url, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }


}
