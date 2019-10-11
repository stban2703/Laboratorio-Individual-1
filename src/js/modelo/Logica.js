class Logica {
    constructor() {
        this.inicio = new Inicio();
        this.creador = new Creador();
        this.guardado = new Guardado();
        this.pantalla = 0;
        this.arregloCreados = [];
        this.date = new Date();
    }

    dibujarPantalla() {
        switch (this.pantalla) {
            case 0:
                this.inicio.dibujarInicio();
                break;
            case 1:
                this.creador.dibujarCreador();
                //this.creador.arrastrarBase();
                break;
            case 2:
                this.guardado.dibujarGuardado();
                for (let i = 0; i < this.arregloCreados.length; i++) {
                    fill(255);
                    textSize(20);
                    textAlign(CENTER);
                    let id = this.arregloCreados[i].getId();
                    let nombre = this.arregloCreados[i].getNombre();
                    let fecha = this.arregloCreados[i].getFecha();
                    text(id + " - " + nombre + " - " + fecha, width / 2, 150 + (50 * i));
                    textAlign(LEFT);
                }
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
                this.creador.activarUsoObjetos();
                if (mouseX > 881 && mouseX < 1096 && mouseY > 603 && mouseY < 656) {
                    this.pantalla = 2;
                }
                let botonGuardar = (mouseX > 652 && mouseX < 868 && mouseY > 601 && mouseY < 658);
                let dia = this.date.getDate();
                let mes = this.date.getMonth();
                let anio = this.date.getFullYear();
                if (botonGuardar && this.creador.input.getTexto().length > 0) {
                    this.arregloCreados.push(new Personaje(this.creador.input.getTexto(), this.arregloCreados.length, dia + "/" + mes + "/" + anio));
                    alert("Datos del gato guardados");
                } else if (botonGuardar) {
                    alert("Debes poner un nombre al gato");
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

    guardarPersonaje() {

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

/*for (let i = 0; i < arregloCreados; i++) {
    text(this.arregloCreados[i].getNombre(), 100, 100);
}*/