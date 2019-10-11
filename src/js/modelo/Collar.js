class Collar extends Base {
    constructor(posX, posY) {
        super(posX, posY);
        this.ponerNormal = false;
        this.ponerPuntos = false;
        this.collarNormal = loadImage("./data/collarnormal.png");
        this.collarPuntos = loadImage("./data/collarpuntos.png");
    }

    pintarCollar() {
        imageMode(CENTER);
        if (this.ponerNormal) {
            image(this.collarNormal, this.posX, this.posY);
        }

        if (this.ponerPuntos) {
            image(this.collarPuntos, this.posX, this.posY);
        }
    }

    getPonerNormal() {
        return this.ponerNormal;
    }

    setPonerNormal(ponerNormal) {
        this.ponerNormal = ponerNormal;
    }

    getPonerPuntos() {
        return this.ponerPuntos;
    }

    setPonerPuntos(ponerPuntos) {
        this.ponerPuntos = ponerPuntos;
    }
}