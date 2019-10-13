class Guardado {
    constructor() {
        this.pantalla = loadImage("./data/guardados.jpg");
        this.descarga = loadImage("./data/descargarboton.png")
        this.creados = new Creador();
    }

    dibujarGuardado() {
        image(this.pantalla, 0, 0, 1200, 700);
        let botonVolver = (mouseX > 64 && mouseX < 278 && mouseY > 51 && mouseY < 108);
        let botonFecha = (mouseX > 400.079 - 76 && mouseX < 400.079 + 76 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
        let botonNombre = (mouseX > 582.455 - 85 && mouseX < 582.455 + 85 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
        let botonId = (mouseX > 743.372 - 63 && mouseX < 743.372 + 63 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
        let botonAscDes = (mouseX > 961.793 - 109 && mouseX < 961.793 + 109 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
        if (botonVolver || botonFecha || botonNombre || botonId || botonAscDes) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }

    getDescarga() {
        return this.descarga;
    }

    setDescarga(descarga) {
        this.descarga = descarga;
    }
}