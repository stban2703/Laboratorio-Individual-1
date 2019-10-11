class Personaje {
    constructor(nombre, id, fecha) {
        this.nombre = nombre;
        this.id = id;
        this.fecha = fecha;
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
}