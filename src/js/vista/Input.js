class Input {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.activar = false;
        this.texto = "";
    }

    pintar() {
        if (this.activar) {
            stroke(255, 0, 0);
        } else {
            stroke(0);
        }
        fill(255);
        rect(this.posX, this.posY, 265, 30);
    }

    mostarTexto() {
        fill(0);
        noStroke()
        textSize(15);
        text(this.texto, this.posX + 10, this.posY + 20);
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

    getActivar() {
        return this.activar;
    }

    setActivar(activar) {
        this.activar = activar;
    }

    getTexto() {
        return this.texto;
    }

    setTexto(texto) {
        this.texto = texto;
    }
}