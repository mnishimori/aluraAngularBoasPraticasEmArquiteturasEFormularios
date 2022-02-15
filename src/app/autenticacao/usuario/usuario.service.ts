import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  salvarToken(token: string){
    this.tokenService.salvarToken(token);
    this.decodificaJWT();
  }

  retornarUsuario(){
    return this.usuarioSubject.asObservable();
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  private decodificaJWT(){
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }
}
