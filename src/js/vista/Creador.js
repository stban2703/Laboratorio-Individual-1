class Creador {
    constructor() {
        this.pantalla = loadImage("./data/creador.jpg");
        this.pintarBase = loadImage("./data/basegato.png");
        //this.objetoOjosVerdes = loadImage("./data/ojosverdes.png");
        this.input = new Input(655, 77);
        this.posX = 306.186;
        this.posY = 350;
        //this.posOjoVerX = 684.394;
        //this.posOjoVerY = 261.798;
        this.moverBase = false;
        //this.moverObjOjo = false;
        //this.personaje = new Personaje();
    }

    dibujarCreador() {
        //Pintar pantalla y objetos
        imageMode(CORNER);
        image(this.pantalla, 0, 0, 1200, 700);
        this.input.pintar();
        this.input.mostarTexto();
        imageMode(CENTER);
        image(this.pintarBase, this.posX, this.posY);
        //image(this.objetoOjosVerdes, this.posOjoVerX, this.posOjoVerY);
        imageMode(CORNER);

        //Cambiar el cursor del mouse
        let base = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        let botonGuardar = (mouseX > 652 && mouseX < 868 && mouseY > 601 && mouseY < 658);
        let botonGuardados = (mouseX > 881 && mouseX < 1096 && mouseY > 601 && mouseY < 658);
        let botonOjos = (mouseX > 684.394 - (92 / 2) && mouseX < 684.394 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonInput = (mouseX > 655 && mouseX < 920 && mouseY > 77 && mouseY < 107);

        if (base || botonGuardar || botonGuardados || botonOjos || botonInput) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }

    //Mover base con objetos
    activarMoverObjetos() {
        //Mover Base
        let base = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        if (base && !this.moverBase) {
            this.moverBase = true;
        }

        //Mover Ojos
        /*if ((mouseX > 684.394 - (92 / 2) && mouseX < 684.394 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2)) && !this.moverObjOjo) {
            this.moverObjOjo = true;
        }*/
    }

    moverObjetos(mX, mY) {
        /*if (this.moverObjOjo) {
            this.posOjoVerX = mX;
            this.posOjoVerY = mY;
        }*/

        //area base
        //mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2)
        if (this.moverBase) {
            this.posX = mX;
            this.posY = mY;
            //this.posOjoVerX = this.posX;
            //this.posOjoVerY = this.posY;
        }
    }

    soltarObjeto() {
        //Soltar Ojo
        /*if (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2) && this.moverObjOjo
            || (this.posOjoVerX == this.posX && this.posOjoVerY == this.posY)) {
            this.posOjoVerX = this.posX + 75.517;
            this.posOjoVerY = this.posY - 183.2;
            this.moverObjOjo = false;
        } else {
            this.posOjoVerX = 684.394;
            this.posOjoVerY = 261.798;
            this.moverObjOjo = false;
        }*/

        //Soltar base
        if (this.moverBase) {
            this.posX = 306.186;
            this.posY = 350;
            this.moverBase = false;
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