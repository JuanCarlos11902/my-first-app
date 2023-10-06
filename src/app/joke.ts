export class Joke {

    setup : string;
    punchline : string;
    hide : boolean;
    textoBoton: string;

    constructor(setup: string, punchline: string, hide: boolean){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = hide;
        this.textoBoton = "Ocultar Broma";
    }

    toggle(){
        this.hide = !this.hide;
        if (!this.hide) {
            this.textoBoton = "Ver Broma";
        }
        else{
            this.textoBoton = "Ocultar Broma";
        }
    }


}
