class Personaje {
    constructor(posX, posY, nombre, id, fecha) {
        this.posX = posX;
        this.posY = posY;
        this.nombre = nombre;
        this.id = id;
        this.fecha = fecha;
        this.pintarBase = loadImage("./data/basegato.png");
    }

    dibujarBase() {
        imageMode(CENTER);
        image(this.pintarBase, 306.186, 350);
    }

    moverPersonaje(mX, mY){
        //if(mX>)
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

}