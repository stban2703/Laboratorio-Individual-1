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
    if (keyCode != BACKSPACE) {
        logica.getCreador().escribirTextoInput(key);
    } else {
        logica.getCreador().eliminarTextoInput();
    }
}

function mousePressed() {
    console.log("x: " + mouseX + " " + "y: " + mouseY);
    logica.interaccionPantalla();
}

function mouseDragged() {
    logica.getCreador().moverObjetos(mouseX, mouseY);
}

function mouseReleased() {
    logica.getCreador().soltarObjeto();
}