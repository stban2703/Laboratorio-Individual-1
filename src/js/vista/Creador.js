class Creador {
    constructor() {
        this.pantalla = loadImage("./data/creador.jpg");
        this.pintarBase = loadImage("./data/basegato.png");
        this.input = new Input(655, 77);
        this.posX = 306.186;
        this.posY = 350;
        this.mover = false;
        //this.personaje = new Personaje();
    }

    dibujarCreador() {
        imageMode(CORNER);
        image(this.pantalla, 0, 0, 1200, 700);
        if ((mouseX > 881 && mouseX < 1096 && mouseY > 601 && mouseY < 658) || (mouseX > 652 && mouseX < 868 && mouseY > 601 && mouseY < 658)) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
        this.input.pintar();
        this.input.mostarTexto();
        imageMode(CENTER);
        image(this.pintarBase, this.posX, this.posY);
        imageMode(CORNER);
    }

    activarMoverObjetos() {
        if (mouseX > 85 && mouseX < 502 && mouseY > 45 && mouseY < 650 && !this.mover) {
            this.mover = true;
            /*this.posX = mX;
            this.posY = mY;*/
        }
    }

    moverObjetos(mX, mY) {
        if (this.mover) {
            this.posX = mX;
            this.posY = mY;
        }
    }

    soltarObjeto() {
        if (this.mover) {
            this.posX = 306.186;
            this.posY = 350;
            this.mover = false;
        }
    }

    activarInput(mX, mY) {
        if (mX > 655 && mX < 920 && mY > 77 && mY < 107) {
            this.input.setActivar(true);
        } else {
            this.input.setActivar(false);
        }
    }

    escribirTextoInput(k) {
        if (this.input.getActivar() && this.input.getTexto().length < 20) {
            this.input.setTexto(this.input.getTexto() + k);
        }
    }

    eliminarTextoInput() {
        if (this.input.getActivar() && this.input.getTexto().length - 1 >= 0) {
            let indice = this.input.getTexto().length - 1;
            this.input.setTexto(this.input.getTexto().substring(0, indice));
        }
    }

    getPosX() {
        return this.posX;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosY(posY) {
        this.posY = posY;
    }
}