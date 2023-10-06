import { Component } from '@angular/core';
import { Joke } from '../joke';
import { Input } from '@angular/core';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent {
  servicio : Servicio

  constructor(){
    this.servicio = new Servicio();
    }

  }

