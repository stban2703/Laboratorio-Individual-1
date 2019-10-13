class Personaje {
    constructor(nombre, id, fecha, imagenPng, posX, posY) {
        this.nombre = nombre;
        this.id = id;
        this.fecha = fecha;
        this.imagenPng = imagenPng;
        this.posX = posX;
        this.posY = posY;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getFecha() {
        return this.fecha;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    getArregloPersonajes() {
        return this.arregloPersonajes;
    }

    setArregloPersonajes(arregloPersonajes) {
        this.arregloPersonajes = arregloPersonajes;
    }

    getImagenPng() {
        return this.imagenPng;
    }

    setImagenPng(imagenPng) {
        this.imagenPng = imagenPng;
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
}