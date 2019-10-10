class Ojo {
    constructor(posX, posY) {
        //super(posX,posY);
        this.arregloOjos = [];
        this.verde = loadImage("./data/ojosverdes.png");
        this.azul = loadImage("./data/ojosazules.png");
        this.amarillo = loadImage("./data/ojosamarillos.png");
        this.arregloOjos.push(this.verde);
        this.arregloOjos.push(this.azul);
        this.arregloOjos.push(this.amarillo);
    }
}