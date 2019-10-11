class Creador {
    constructor() {
        this.pantalla = loadImage("./data/creador.jpg");
        this.input = new Input(655, 77);
        this.moverBase = false;
        this.base = new Base(306.186, 350);
        this.arregloOjos = [];
        this.verde = loadImage("./data/ojosverdes.png");
        this.azul = loadImage("./data/ojosazules.png");
        this.amarillo = loadImage("./data/ojosamarillos.png");
        this.pelaje = new Pelaje(this.base.posX, this.base.posY);
        this.arregloOjos.push(new Ojo(700, 261.798, this.verde));
        this.arregloOjos.push(new Ojo(850, 261.798, this.azul));
        this.arregloOjos.push(new Ojo(1000, 261.798, this.amarillo));
    }

    dibujarCreador() {
        //Pintar pantalla y objetos
        imageMode(CORNER);
        image(this.pantalla, 0, 0, 1200, 700);
        this.base.dibujarBase();
        this.pelaje.pintarPelaje();
        //Arreglo de ojos
        for (let i = 0; i < this.arregloOjos.length; i++) {
            imageMode(CENTER);
            image(this.arregloOjos[i].getImagenOjo(), this.arregloOjos[i].getPosX(), this.arregloOjos[i].getPosY());
        }

        imageMode(CORNER);
        //this.ojo.dibujarOjos();
        this.input.pintar();
        this.input.mostarTexto();

        //Cambiar el cursor del mouse
        //Area botones
        let botonBase = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        let botonGuardar = (mouseX > 652 && mouseX < 868 && mouseY > 601 && mouseY < 658);
        let botonGuardados = (mouseX > 881 && mouseX < 1096 && mouseY > 601 && mouseY < 658);
        //Area ojos
        let botonOjoVerde = (mouseX > 700 - (92 / 2) && mouseX < 700 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonOjoAzul = (mouseX > 850 - (92 / 2) && mouseX < 850 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonOjoAmarillo = (mouseX > 1000 - (92 / 2) && mouseX < 1000 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonInput = (mouseX > 655 && mouseX < 920 && mouseY > 77 && mouseY < 107);
        //Area de pelajes
        let peloBlanco = (mouseX > 684.716 - 35.15 && mouseX < 684.716 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloNegro = (mouseX > 766.987 - 35.15 && mouseX < 766.987 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloTigre = (mouseX > 846.144 - 35.15 && mouseX < 846.144 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloSiames = (mouseX > 925.757 - 35.15 && mouseX < 925.757 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        //Area de collares
        let botonCollar = (mouseX > 709.502 - 58 && mouseX < 709.502 + 58 && mouseY > 535.118 - 21.2 && mouseY < 535.118 + 21.2);
        let botonPuntos = (mouseX > 844.365 - 58 && mouseX < 844.365 + 58 && mouseY > 525.667 - 12 && mouseY < 525.667 + 12);
        //let botonQuitar = (mouseX > 966.216 )

        if (botonBase || botonGuardar || botonGuardados || botonOjoAzul || botonOjoVerde || botonOjoAmarillo || botonInput
            || peloBlanco || peloNegro || peloTigre || peloSiames || botonCollar || botonPuntos) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    }

    activarMoverBase() {
        //Area base
        let botonBase = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        //Mover Base
        if (botonBase && !this.moverBase) {
            this.moverBase = true;
        }

        //Area de pelajes
        let peloBlanco = (mouseX > 684.716 - 35.15 && mouseX < 684.716 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloNegro = (mouseX > 766.987 - 35.15 && mouseX < 766.987 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloTigre = (mouseX > 846.144 - 35.15 && mouseX < 846.144 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);
        let peloSiames = (mouseX > 925.757 - 35.15 && mouseX < 925.757 + 35.15 && mouseY > 397.94 - 35.15 && mouseY < 397.94 + 35.15);

        if (peloBlanco && !this.pelaje.getPonerBlanco()) {
            this.pelaje.setPonerBlanco(true);
            this.pelaje.setPonerNegro(false);
            this.pelaje.setPonerTigre(false);
            this.pelaje.setPonerSiames(false);
        }

        if (peloNegro && !this.pelaje.getPonerNegro()) {
            this.pelaje.setPonerBlanco(false);
            this.pelaje.setPonerNegro(true);
            this.pelaje.setPonerTigre(false);
            this.pelaje.setPonerSiames(false);
        }

        if (peloTigre && !this.pelaje.getPonerTigre()) {
            this.pelaje.setPonerBlanco(false);
            this.pelaje.setPonerNegro(false);
            this.pelaje.setPonerTigre(true);
            this.pelaje.setPonerSiames(false);
        }

        if (peloSiames && !this.pelaje.getPonerSiames()) {
            this.pelaje.setPonerBlanco(false);
            this.pelaje.setPonerNegro(false);
            this.pelaje.setPonerTigre(false);
            this.pelaje.setPonerSiames(true);
        }

        //Area de ojos
        let botonOjoVerde = (mouseX > 700 - (92 / 2) && mouseX < 700 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonOjoAzul = (mouseX > 850 - (92 / 2) && mouseX < 850 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));
        let botonOjoAmarillo = (mouseX > 1000 - (92 / 2) && mouseX < 1000 + (92 / 2) && mouseY > 261.798 - (39 / 2) && mouseY < 261.798 + (39 / 2));

        if (botonOjoVerde && !this.arregloOjos[0].getActivarMoverOjo() && !this.arregloOjos[0].getPegarOjo()) {
            this.arregloOjos[0].setActivarMoverOjo(true);
            this.arregloOjos[1].setActivarMoverOjo(false);
            this.arregloOjos[2].setActivarMoverOjo(false);
        }

        if (botonOjoAzul && !this.arregloOjos[1].getActivarMoverOjo() && !this.arregloOjos[1].getPegarOjo()) {
            this.arregloOjos[0].setActivarMoverOjo(false);
            this.arregloOjos[1].setActivarMoverOjo(true);
            this.arregloOjos[2].setActivarMoverOjo(false);
        }

        if (botonOjoAmarillo && !this.arregloOjos[2].getActivarMoverOjo() && !this.arregloOjos[2].getPegarOjo()) {
            this.arregloOjos[0].setActivarMoverOjo(false);
            this.arregloOjos[1].setActivarMoverOjo(false);
            this.arregloOjos[2].setActivarMoverOjo(true);
        }
    }

    arrastrarBase() {
        if (this.moverBase) {
            //Mover base con objetos
            this.base.setPosX(mouseX);
            this.base.setPosY(mouseY);

            //Mover pelaje con base
            if (this.pelaje.getPonerBlanco() || this.pelaje.getPonerNegro() || this.pelaje.getPonerTigre() || this.pelaje.getPonerSiames()) {
                this.pelaje.setPosX(mouseX);
                this.pelaje.setPosY(mouseY);
            }

            //Mover ojos con base
            if (this.arregloOjos[0].getPegarOjo()) {
                this.arregloOjos[0].setPosX(this.base.getPosX() + (381.703 - 306.186));
                this.arregloOjos[0].setPosY(this.base.getPosY() - (350 - 166.8));
            }

            if (this.arregloOjos[1].getPegarOjo()) {
                this.arregloOjos[1].setPosX(this.base.getPosX() + (381.703 - 306.186));
                this.arregloOjos[1].setPosY(this.base.getPosY() - (350 - 166.8));
            }

            if (this.arregloOjos[2].getPegarOjo()) {
                this.arregloOjos[2].setPosX(this.base.getPosX() + (381.703 - 306.186));
                this.arregloOjos[2].setPosY(this.base.getPosY() - (350 - 166.8));
            }
        }

        //Mover ojo verde
        if (this.arregloOjos[0].getActivarMoverOjo() && !this.arregloOjos[0].getPegarOjo()) {
            this.arregloOjos[0].setPosX(mouseX);
            this.arregloOjos[0].setPosY(mouseY);
        }

        //Mover ojo azul
        if (this.arregloOjos[1].getActivarMoverOjo() && !this.arregloOjos[1].getPegarOjo()) {
            this.arregloOjos[1].setPosX(mouseX);
            this.arregloOjos[1].setPosY(mouseY);
        }

        //Mover ojo amarillo
        if (this.arregloOjos[2].getActivarMoverOjo() && !this.arregloOjos[2].getPegarOjo()) {
            this.arregloOjos[2].setPosX(mouseX);
            this.arregloOjos[2].setPosY(mouseY);
        }
    }

    soltarBase() {
        //Soltar base

        if (this.moverBase) {
            this.base.setPosX(306.186);
            this.base.setPosY(350);
            this.pelaje.setPosX(306.186);
            this.pelaje.setPosY(350);
            this.moverBase = false;
        }

        //Pegar ojo verde
        let botonBase = (mouseX > 306.186 - (398 / 2) && mouseX < 306.186 + (398 / 2) && mouseY > 350 - (590 / 2) && mouseY < 350 + (590 / 2));
        if (botonBase && this.arregloOjos[0].getActivarMoverOjo() && !this.arregloOjos[0].getPegarOjo()) {
            //Pegar ojo a la base
            !this.arregloOjos[0].setPegarOjo(true);
            this.arregloOjos[0].setActivarMoverOjo(false);
            this.arregloOjos[1].setPegarOjo(false);
            this.arregloOjos[2].setPegarOjo(false);

            //Posicion defecto azul
            this.arregloOjos[1].setPosX(850);
            this.arregloOjos[1].setPosY(261.798);

            //Posicion defecto amarillo
            this.arregloOjos[2].setPosX(1000);
            this.arregloOjos[2].setPosY(261.798);

        } else if (this.arregloOjos[0].getActivarMoverOjo() && !this.arregloOjos[0].getPegarOjo()) {
            //Posicion por defecto
            //verde
            this.arregloOjos[0].setPosX(700);
            this.arregloOjos[0].setPosY(261.798);
            this.arregloOjos[0].setActivarMoverOjo(false);
        }

        //Pegar ojo azul
        if (botonBase && this.arregloOjos[1].getActivarMoverOjo() && !this.arregloOjos[1].getPegarOjo()) {
            //Pegar ojo a la base
            //Posicion defecto ojo 
            !this.arregloOjos[1].setPegarOjo(true);
            this.arregloOjos[1].setActivarMoverOjo(false);
            this.arregloOjos[0].setPegarOjo(false);
            this.arregloOjos[2].setPegarOjo(false);

            //Posicion defecto ojo verde
            this.arregloOjos[0].setPosX(700);
            this.arregloOjos[0].setPosY(261.798);

            //Posicion defecto ojo amarillo
            this.arregloOjos[2].setPosX(1000);
            this.arregloOjos[2].setPosY(261.798);

        } else if (this.arregloOjos[1].getActivarMoverOjo() && !this.arregloOjos[1].getPegarOjo()) {
            //Posicion por defecto
            //Posicion defecto ojo azul
            this.arregloOjos[1].setPosX(850);
            this.arregloOjos[1].setPosY(261.798);
            this.arregloOjos[1].setActivarMoverOjo(false);
        }

        //Pegar ojo amarillo
        if (botonBase && this.arregloOjos[2].getActivarMoverOjo() && !this.arregloOjos[2].getPegarOjo()) {
            //Pegar ojo a la base
            !this.arregloOjos[2].setPegarOjo(true);
            this.arregloOjos[2].setActivarMoverOjo(false);
            this.arregloOjos[0].setPegarOjo(false);
            this.arregloOjos[1].setPegarOjo(false);

            //Posicion defecto ojo verde
            this.arregloOjos[0].setPosX(700);
            this.arregloOjos[0].setPosY(261.798);

            //Posicion defecto ojo azul
            this.arregloOjos[1].setPosX(850);
            this.arregloOjos[1].setPosY(261.798);

        } else if (this.arregloOjos[2].getActivarMoverOjo() && !this.arregloOjos[2].getPegarOjo()) {
            //Posicion por defecto
            //Posicion defecto ojo amarillo
            this.arregloOjos[2].setPosX(1000);
            this.arregloOjos[2].setPosY(261.798);
            this.arregloOjos[2].setActivarMoverOjo(false);
        }


        //Coordenada de la posicion del ojo verde en la base
        if (this.arregloOjos[0].getPegarOjo() && !this.arregloOjos[0].getActivarMoverOjo()) {
            this.arregloOjos[0].setPosX(this.base.getPosX() + (381.703 - 306.186));
            this.arregloOjos[0].setPosY(this.base.getPosY() - (350 - 166.8));

        }

        //Coordenada de la posicion del ojo azul en la base
        if (this.arregloOjos[1].getPegarOjo() && !this.arregloOjos[1].getActivarMoverOjo()) {
            this.arregloOjos[1].setPosX(this.base.getPosX() + (381.703 - 306.186));
            this.arregloOjos[1].setPosY(this.base.getPosY() - (350 - 166.8));

        }

        //Coordenada de la posicion del ojo verde en la base
        if (this.arregloOjos[2].getPegarOjo() && !this.arregloOjos[2].getActivarMoverOjo()) {
            this.arregloOjos[2].setPosX(this.base.getPosX() + (381.703 - 306.186));
            this.arregloOjos[2].setPosY(this.base.getPosY() - (350 - 166.8));

        }
    }

    activarInput(mX, mY) {
        if (mX > 655 && mX < 920 && mY > 77 && mY < 107) {
            this.input.setActivar(true);
        } else {
            this.input.setActivar(false);
        }
    }

    escribirTextoInput(k) {
        if (this.input.getActivar() && this.input.getTexto().length < 20) {
            this.input.setTexto(this.input.getTexto() + k);
        }
    }

    eliminarTextoInput() {
        if (this.input.getActivar() && this.input.getTexto().length - 1 >= 0) {
            let indice = this.input.getTexto().length - 1;
            this.input.setTexto(this.input.getTexto().substring(0, indice));
        }
    }
}