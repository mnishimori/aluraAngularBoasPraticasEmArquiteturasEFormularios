import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario> {
    return this.httpClient
      .post<NovoUsuario>(`${API}/user/signup`, novoUsuario)
      .pipe();
  }

  verificarUsuarioExistente(nome: string): Observable<NovoUsuario> {
    console.log(nome);
    return this.httpClient.get<NovoUsuario>(`${API}/user/exists/${nome}`)
    .pipe();
  }
}
