class Ojo extends Base {
    constructor(posX, posY, imagenOjo) {
        super(posX, posY);
        this.imagenOjo = imagenOjo;
        this.activarMoverOjo = false;
        this.pegarOjo = false;
    }

    getImagenOjo() {
        return this.imagenOjo;
    }

    setImagenOjo(imagenOjo) {
        this.imagenOjo = imagenOjo;
    }

    getActivarMoverOjo() {
        return this.activarMoverOjo;
    }

    setActivarMoverOjo(activarMoverOjo) {
        this.activarMoverOjo = activarMoverOjo;
    }

    getPegarOjo() {
        return this.pegarOjo;
    }

    setPegarOjo(pegarOjo) {
        this.pegarOjo = pegarOjo;
    }
}