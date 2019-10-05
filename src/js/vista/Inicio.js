class Inicio {
    constructor() {
        this.pantalla = loadImage("./data/inicio.jpg");;
    }

    dibujarInicio() {
        image(this.pantalla, 0, 0, 1200, 700);
    }
}