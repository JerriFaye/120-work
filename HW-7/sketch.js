

var ball = {};
ball.width = 30;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;

    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;

    }
    if (ball.x <= 0) {
      background(255, 237, 0, 40);

    }
    if (ball.x >= width) {
      background(132, 213, 238, 40);

    }
    if (ball.y <= 0) {
      background(173, 182, 255, 40);

    }
    if (ball.y >= height) {
      background(191, 7, 73, 40);

    }
    //var symbol = ("?");
    //textSize(100);
    //textFont("Georgia");
    //text(symbol, ball.x, ball.y);
    fill(0);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
