var socket;
function setup() {
    createCanvas(400, 400);
    background(51);
    // socket = io.connect('http://192.168.0.4:3000');
    socket = io.connect();
    socket.on('mouse', newDrawing);
}
function newDrawing(data) {
    noStroke();
    fill(255);
    ellipse(data.x, data.y, 30, 30);
}
function mouseDragged() {
    var data = {x: mouseX, y: mouseY};
    socket.emit('mouse', data);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 30, 30);
}