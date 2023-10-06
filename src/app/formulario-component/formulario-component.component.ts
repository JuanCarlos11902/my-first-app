import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent {
  @Output() jokeCreated = new EventEmitter<{setup:string, punchline: string}>
  @Input() setupText: string = '';
  @Input() punchlineText: string = '';

  addJoke(){
    this.jokeCreated.emit({setup: this.setupText, punchline: this.punchlineText});
  }

}
