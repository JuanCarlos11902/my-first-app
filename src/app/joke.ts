export class Joke {

    setup : string;
    punchline : string;
    hide : boolean;
    textoBoton: string;

    constructor(setup: string, punchline: string, hide: boolean){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = hide;
        this.textoBoton = "Ver Broma";
    }

    toggle(){
        this.hide = !this.hide;
        if (!this.hide) {
            this.textoBoton = "Ocultar Broma";
        }
        else{
            this.textoBoton = "Ver Broma";
        }
    }
    
    editarBroma(jokeEditar : {setup: string, punchline: string}){
        this.setup = jokeEditar.setup;
        this.punchline = jokeEditar.punchline;
      }
    
}
