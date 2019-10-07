class Logica {
    constructor() {
        this.inicio = new Inicio();
        this.creador = new Creador();
        this.guardado = new Guardado();
        this.pantalla = 0;
    }

    dibujarPantalla() {
        switch (this.pantalla) {
            case 0:
                this.inicio.dibujarInicio();
                break;
            case 1:
                this.creador.dibujarCreador();
                this.creador.moverObjetos(mouseX, mouseY);
                break;
            case 2:
                this.guardado.dibujaGuardado();
            default:
                break;
        }
    }

    interaccionPantalla() {
        switch (this.pantalla) {
            case 0:
                if (mouseX > 479 && mouseX < 717 && mouseY > 476 && mouseY < 562) {
                    this.pantalla = 1;
                }
                break;
            case 1:
                this.creador.activarInput(mouseX, mouseY);
                this.creador.activarMoverObjetos();
                if (mouseX > 881 && mouseX < 1096 && mouseY > 603 && mouseY < 656) {
                    this.pantalla = 2;
                }
                break;
            case 2:
                if (mouseX > 64 && mouseX < 278 && mouseY > 51 && mouseY < 108) {
                    this.pantalla = 1;
                }
                break;
            default:
                break;
        }
    }

    getInicio() {
        return this.inicio;
    }

    setInicio(inicio) {
        this.inicio = inicio;
    }

    getCreador() {
        return this.creador;
    }

    setCreador(creador) {
        this.creador = creador;
    }

    getGuardado() {
        return this.guardado;
    }

    setGuardado(guardado) {
        this.guardado = guardado;
    }

    getPantalla() {
        return this.pantalla;
    }

    setPantalla(pantalla) {
        this.pantalla = pantalla;
    }
}