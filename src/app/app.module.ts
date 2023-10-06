import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { ListaJokesComponent } from './lista-jokes/lista-jokes.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeListComponentComponent,
    FormularioComponentComponent,
    ListaJokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
