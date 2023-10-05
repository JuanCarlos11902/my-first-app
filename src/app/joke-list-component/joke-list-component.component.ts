import { Component } from '@angular/core';
import { Joke } from '../joke';
import { Input } from '@angular/core';

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent {
  jokeList : Joke[];

  constructor(){
    this.jokeList = [new Joke('A Christian no le gusta Desarrollo de Interfaces', 'Porque sigue sin saber hacer el punto de silla', true),
    new Joke('La bebida favorita de un programador', 'es el JLabel', true),
    new Joke('Van dos', 'Y se cae el del medio',  true)];
  }

  anadirJoke(joke: {setup: string, punchline: string}){
    this.jokeList.push(new Joke(joke.setup,joke.punchline,true));
  }
}
