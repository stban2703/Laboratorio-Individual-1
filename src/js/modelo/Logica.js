class Logica {
    constructor() {
        this.inicio = new Inicio();
        this.creador = new Creador();
        this.pantalla = 0;
    }

    dibujarPantalla() {
        switch (this.pantalla) {
            case 0:
                this.inicio.dibujarInicio();
                break;
            case 1:
                this.creador.dibujarCreador();
            default:
                break;
        }
    }

    cambiarPantalla() {
        switch (this.pantalla) {
            case 0:
                if (mouseX > 479 && mouseX < 717 && mouseY > 476 && mouseY < 562) {
                    this.pantalla = 1;
                }
                break;
            case 1:
                break;
            default:
                break;
        }
    }
}