import { Component } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent {
  jokeList : Joke[];

  constructor(){
    this.jokeList = [new Joke('Que nos diferencia a Christian y a mi?', 'Que Juan Carlos tiene más algoritmia', true),
    new Joke('Porque le gusta tanto a Cayetano Java?', 'Por que le gusta sacar menos nota que Christian y Juan Carlos ', true),
    new Joke('Porque a Christian no le gusta Dentista?', 'No sabe hacer el Focking Punto de Silla',  true)];
    "Quiero traerme la prueba";
  }
}
