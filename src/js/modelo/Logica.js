class Logica {
    constructor() {
        this.inicio = new Inicio();
        this.creador = new Creador();
        this.guardado = new Guardado();
        this.compararId = new PersonajeIdComparable();
        this.compararNombre = new PersonajeNombreComparable();
        this.compararFecha = new PersonajeFechaComparable();
        this.pantalla = 0;
        this.arregloCreados = [];
        this.imagenGato;
    }

    dibujarPantalla() {
        switch (this.pantalla) {
            case 0:
                this.inicio.dibujarInicio();
                break;
            case 1:
                this.creador.dibujarCreador();
                break;
            case 2:
                this.guardado.dibujarGuardado();
                for (let i = 0; i < this.arregloCreados.length; i++) {
                    fill(255);
                    textSize(20);
                    let id = this.arregloCreados[i].getId();
                    let nombre = this.arregloCreados[i].getNombre();
                    let fecha = this.arregloCreados[i].getFecha();
                    let posicionX = this.arregloCreados[i].getPosX();
                    let posicionY = this.arregloCreados[i].getPosY();
                    text(id + " - " + nombre + " - " + fecha, posicionX, posicionY + (80 * i));
                    imageMode(CENTER);
                    image(this.arregloCreados[i].getImagenPng(), 305, 150 + (80 * i), 49.559, 73.655);
                    image(this.guardado.getDescarga(), posicionX + 569, posicionY + (80 * i));
                }
                imageMode(CORNER);
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
                let nombreGato = this.creador.input.getTexto();
                if (botonGuardar && this.creador.input.getTexto().length > 0) {
                    let date = new Date();
                    let dia = date.getDate();
                    let mes = date.getMonth() + 1;
                    let anio = date.getFullYear();
                    let hora = date.getHours();
                    let min = date.getMinutes();
                    let seg = date.getSeconds();
                    this.imagenGato = get(306.186 - (398 / 2), 350 - (590 / 2), 396.958, 589.968);

                    //Agregar Gato
                    this.arregloCreados.push(new Personaje(nombreGato, this.arregloCreados.length,
                        dia + "/" + mes + "/" + anio + " " + hora + ":" + min + ":" + seg, this.imagenGato, 335, 150));

                    alert("Gato guardado.");

                } else if (botonGuardar) {
                    alert("Debes poner un nombre al gato.");
                }
                break;
                
            case 2:
                if (mouseX > 64 && mouseX < 278 && mouseY > 51 && mouseY < 108) {
                    this.pantalla = 1;
                }
                let botonId = (mouseX > 743.372 - 63 && mouseX < 743.372 + 63 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
                let botonNombre = (mouseX > 582.455 - 85 && mouseX < 582.455 + 85 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
                let botonFecha = (mouseX > 400.079 - 76 && mouseX < 400.079 + 76 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);
                let botonAscDes = (mouseX > 961.793 - 109 && mouseX < 961.793 + 109 && mouseY > 74 - 13.5 && mouseY < 74 + 13.5);

                if (botonId) {
                    this.arregloCreados.sort(this.compararId.compare);
                }

                if (botonNombre) {
                    this.arregloCreados.sort(this.compararNombre.compare);
                }

                if (botonFecha) {
                    this.arregloCreados.sort(this.compararFecha.compare);
                }

                if (botonAscDes) {
                    this.arregloCreados.reverse();
                }

                for (let i = 0; i < this.arregloCreados.length; i++) {
                    let posicionX = this.arregloCreados[i].getPosX();
                    let posicionY = this.arregloCreados[i].getPosY() + 75 * i;
                    if (mouseX > (posicionX + 569) - 73 && mouseX < (posicionX + 569) + 73 && mouseY > posicionY - 19 && mouseY < posicionY + 19) {
                        this.arregloCreados[i].getImagenPng().save(this.arregloCreados[i].getNombre() + ".jpg");
                    }
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