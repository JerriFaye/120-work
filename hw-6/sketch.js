var rain = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}

var rain2 = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}

var drop = {
  x1: 0,
  y1: 0,
  x2: 3,
  y2: 1
}

var col = {
  r: 0,
  g: 0,
  b: 0
}

function setup () {
  createCanvas(600, 400);
}

function draw () {
// frame color tone, alpha and speed
  background(36, 51, 57, 50);
  //background(124, 227, 236, 50);
  //background(28, 158, 185, 50);
  //background(58, 83, 102, 50);
  //background(40, 40, 50, 50);
  frameRate(28);

// rain color variables
  col.r = random(50, 150);
  col.g = random(50, 170);
  col.b = random(100, 200);
  stroke (col.r, col.g, col.b);

// rain thickness
  var sizes = [1 , 2 , 3, 4];
  var rain_size = random(sizes);
  strokeWeight (rain_size);

// rain length
  var rain_length = random(50, 250);
  rain.x1 = random(0, width, 0, height);
  rain.x2 = constrain(rain.x1, rain.x1 + 3, rain.x1 % 5);
  line(rain.x1, rain.y1, rain.x2, rain_length);

// contrasting rain direction and length
  rain2.x1 = random(0, width, 0, height);
  rain2.y1 = random(0, width, 0, height);
  rain2.x2 = constrain(rain2.x1, rain2.x1 - 1, rain2.x1 * 3);
  rain2.y2 = constrain(rain2.y1, rain2.y1 + 100, rain2.y1 * 5);
  line(rain2.x1, rain2.y1, rain2.x2, rain2.y2);

// rain drops mapped to smaller/thinner in background and larger/thicker in foreground
  var drop_min = floor(5);
  var drop_max = floor(70);
  drop.x1 = random(0, width);
  drop.y1 = random(height/2, 400);
  var drop_size1 = map(drop.y1, height/2, 400, drop_min, drop_max);
  var drop_size2 = map(drop.y1, height/2, 400, 1, 10);
  fill(col.r, col.g, col.b);
  ellipse(drop.x1, drop.y1, drop_size1, drop_size2);
}
