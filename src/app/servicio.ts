import { Joke } from "./joke";

export class Servicio {

    listaJokes : Joke[];

    constructor(){
        this.listaJokes = [new Joke('A Christian no le gusta Desarrollo de Interfaces', 'Porque sigue sin saber hacer el punto de silla', true),
        new Joke('La bebida favorita de un programador', 'es el JLabel', true),
        new Joke('Van dos', 'Y se cae el del medio',  true)];
    }

    anadirJoke(joke: {setup: string, punchline: string}){
        this.listaJokes.push(new Joke(joke.setup,joke.punchline,true));
      }
    
      eliminarJoke(jokeEliminar: Joke){
        this.listaJokes.forEach((joke,index) => {
          if (joke.setup === jokeEliminar.setup) {
            this.listaJokes.splice(index,1);
          }
        })
    }

}
