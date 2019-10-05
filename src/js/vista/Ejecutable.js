let logica;

function setup() {
    logica = new Logica();
    createCanvas(1200, 700);
}

function draw() {
    background(255);
    logica.dibujarPantalla();
}

function mousePressed() {
    console.log("x: " + mouseX + " " + "y: " + mouseY);
    logica.cambiarPantalla();

}

function mouseDragged() {

}

function mouseReleased() {

}