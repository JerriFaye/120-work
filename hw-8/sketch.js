function setup () {
  createCanvas(600, 500);
  background(0);
  noStroke();
}

function draw () {
frameRate(2);

  for(var x = 25; x <= width; x += 50) {
    for (var y = 15; y <= height; y += 50) {
      fill(random(100, 255), random(100, 200), random(50, 200));
      ellipse(x, y, 30, 30);
      //rect(x, y, 100, 100);
    }
  }
  for(var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
      fill(random(30, 100), random(30, 100), random(30, 100));
      triangle(x, y, x + 25, y + 50, x - 25, y + 50);
    }
  }
}
