import { Component, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-lista-jokes',
  templateUrl: './lista-jokes.component.html',
  styleUrls: ['./lista-jokes.component.css']
})
export class ListaJokesComponent {
  @Input() joke: Joke;
}
