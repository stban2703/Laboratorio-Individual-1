class Inicio {
    constructor() {
        this.pantalla = loadImage("./data/inicio.jpg");;
    }

    dibujarInicio() {
        image(this.pantalla, 0, 0, 1200, 700);
        if (mouseX > 479 && mouseX < 717 && mouseY > 476 && mouseY < 562) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }
}