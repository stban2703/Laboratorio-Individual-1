class Creador {
    constructor() {
        this.pantalla = loadImage("./data/creador.jpg")
    }

    dibujarCreador() {
        image(this.pantalla, 0, 0, 1200, 700);
    }
}