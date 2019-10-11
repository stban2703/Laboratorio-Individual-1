class Pelaje extends Base {
    constructor(posX, posY) {
        super(posX, posY);
        this.ponerBlanco = false;
        this.ponerNegro = false;
        this.ponerTigre = false;
        this.ponerSiames = false;
        this.blanco = loadImage("./data/blancopelaje.png");
        this.negro = loadImage("./data/negropelaje.png");
        this.tigre = loadImage("./data/tigrepelaje.png");
        this.siames = loadImage("./data/siamespelaje.png");
    }

    pintarPelaje() {
        imageMode(CENTER);
        if (this.ponerBlanco) {
            image(this.blanco, this.posX, this.posY);
        }

        if (this.ponerNegro) {
            image(this.negro, this.posX, this.posY);
        }

        if (this.ponerTigre) {
            image(this.tigre, this.posX-12, this.posY);
        }

        if (this.ponerSiames) {
            image(this.siames, this.posX, this.posY+6);
        }
    }

    getPonerBlanco() {
        return this.ponerBlanco;
    }

    setPonerBlanco(ponerBlanco) {
        this.ponerBlanco = ponerBlanco;
    }
    getPonerNegro() {
        return this.ponerNegro;
    }

    setPonerNegro(ponerNegro) {
        this.ponerNegro = ponerNegro;
    }

    getPonerTigre() {
        return this.ponerTigre;
    }

    setPonerTigre(ponerTigre) {
        this.ponerTigre = ponerTigre;
    }

    getPonerSiames() {
        return this.ponerSiames;
    }

    setPonerSiames(ponerSiames) {
        this.ponerSiames = ponerSiames;
    }
}