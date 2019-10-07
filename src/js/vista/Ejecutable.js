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
        logica.escribirNombre();
    } else {
        logica.borrarNombre();
    }
}

function mousePressed() {
    console.log("x: " + mouseX + " " + "y: " + mouseY);
    logica.interaccionPantalla();
}

function mouseDragged() {

}

function mouseReleased() {

}