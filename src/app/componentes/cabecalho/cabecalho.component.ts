import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  user$ = this.usuarioService.retornarUsuario();

  ngOnInit(): void {}

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
