import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/animais/animal';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
