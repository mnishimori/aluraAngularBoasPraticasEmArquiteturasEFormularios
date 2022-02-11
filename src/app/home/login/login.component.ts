import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.usuario);
    console.log(this.senha);
    this.authService.autenticar(this.usuario, this.senha)
    .subscribe(response => {
      console.log('Autenticado com sucesso');
      this.router.navigate(['animais'])
    }, (responseError) => {
      console.log(responseError);
      }
    );
  }

}
