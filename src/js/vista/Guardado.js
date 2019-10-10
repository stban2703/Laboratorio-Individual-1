class Guardado {
    constructor() {
        this.pantalla = loadImage("./data/guardados.jpg");
    }

    dibujarGuardado() {
        image(this.pantalla, 0, 0, 1200, 700);
        if (mouseX > 64 && mouseX < 278 && mouseY > 51 && mouseY < 108) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }
}