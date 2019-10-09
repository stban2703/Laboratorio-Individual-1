class Base{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.pintarBase = loadImage("./data/basegato.png");
    }

    dibujarBase() {
        imageMode(CENTER);
        image(this.pintarBase, this.posX, this.posY);
        
        //Para evitar cambios en otras imagenes
        imageMode(CORNER);
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