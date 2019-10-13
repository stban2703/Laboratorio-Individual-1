let logica;

function setup() {
    logica = new Logica();
    createCanvas(1200, 700);
}

function draw() {
    background(255);
    logica.dibujarPantalla();
}

function keyTyped() {
    if (keyCode != BACKSPACE && keyCode != ENTER) {
        logica.getCreador().escribirTextoInput(key);
    }
}

function keyPressed() {
    if (keyCode == BACKSPACE) {
        logica.getCreador().eliminarTextoInput();
    }
}

function mousePressed() {
    logica.interaccionPantalla();
}

function mouseDragged() {
    logica.getCreador().arrastrarObjetos();
}

function mouseReleased() {
    logica.getCreador().soltarObjetos();
}