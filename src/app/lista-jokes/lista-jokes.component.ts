import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-lista-jokes',
  templateUrl: './lista-jokes.component.html',
  styleUrls: ['./lista-jokes.component.css']
})
export class ListaJokesComponent {
  @Input() joke: Joke;
  @Output() eliminar = new EventEmitter<{jokeAEliminar: Joke}>();
  editarPulsado: boolean = false;

  eliminarBroma(){
    this.eliminar.emit({jokeAEliminar : this.joke});
  }

  toggleEditar(){
    this.editarPulsado = !this.editarPulsado;
  }

}
