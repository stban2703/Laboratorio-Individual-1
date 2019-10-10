class Creador {
    constructor() {
        this.pantalla = loadImage("./data/creador.jpg");
        this.input = new Input(655, 77);
        this.moverBase = false;
        this.base = new Base(306.186, 350);
    }

    dibujarCreador() {
        //Pintar pantalla y objetos
        imageMode(CORNER);
        image(this.pantalla, 0, 0, 1200, 700);
        this.base.dibujarBase();
        this.input.pintar();
        this.input.mostarTexto();

        //Cambiar el cursor del mouse
        let botonBase = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        let botonGuardar = (mouseX > 652 && mouseX < 868 && mouseY > 601 && mouseY < 658);
        let botonGuardados = (mouseX > 881 && mouseX < 1096 && mouseY > 601 && mouseY < 658);
        let botonOjos = (mouseX > 684.394 - (92 / 2) && mouseX < 684.394 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonInput = (mouseX > 655 && mouseX < 920 && mouseY > 77 && mouseY < 107);

        if (botonBase || botonGuardar || botonGuardados || botonOjos || botonInput) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }

    activarMoverBase() {
        //Mover Base
        let botonBase = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        if (botonBase && !this.moverBase) {
            this.moverBase = true;
        }
    }

    arrastrarBase() {
        if (this.moverBase) {
            this.base.setPosX(mouseX);
            this.base.setPosY(mouseY);
        }
    }

    soltarBase() {
        //Soltar base
        if (this.moverBase) {
            this.base.setPosX(306.186);
            this.base.setPosY(350);
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
}