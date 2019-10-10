class Ojo extends Base {
    constructor(posX, posY) {
        super(posX, posY);
        this.arregloOjos = [];
        this.verde = loadImage("./data/ojosverdes.png");
        this.azul = loadImage("./data/ojosazules.png");
        this.amarillo = loadImage("./data/ojosamarillos.png");
        this.arregloOjos.push(this.verde);
        this.arregloOjos.push(this.azul);
        this.arregloOjos.push(this.amarillo);
        this.mover = false;
    }

    dibujarOjos() {
        for (let i = 0; i < this.arregloOjos.length; i++) {
            imageMode(CENTER);
            image(this.arregloOjos[i], this.posX + (i * 150), this.posY);

            //Para evitar cambios en otras imagenes
            imageMode(CORNER);
        }
    }
}