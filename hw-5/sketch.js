function setup(){
  createCanvas (500, 500);
  background (235);
}
function draw(){

frameRate(2);

  for(var x = 25; x <= width; x += 50) {
    for (var y = 15; y <= height; y += 50) {
      fill(random(100, 255), random(100, 200), random(50, 200), 100);
      push();
      noStroke();
      ellipse(x, y, 30, 30);
      pop();
    }
  }

  for(var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
      push();
      noStroke();
      fill(215);
      //fill(random(30, 100), random(30, 100), random(30, 100));
      triangle(x, y, x + 25, y + 50, x - 25, y + 50);
      pop();
    }
  }

strokeWeight(2);

// left eye
  beginShape();
  curveVertex(190, 235);
  curveVertex(190, 235);
  curveVertex(220, 230);
  curveVertex(245, 235);
  curveVertex(245, 235);
  curveVertex(232, 252);
  curveVertex(200, 250);
  curveVertex(190, 235);
  curveVertex(190, 235);
  noFill();
  //fill(255);
  endShape();
  // right eye
    beginShape();
    curveVertex(316, 233);
    curveVertex(316, 233);
    curveVertex(335, 227);
    curveVertex(352, 232);
    curveVertex(352, 232);
    curveVertex(345, 248);
    curveVertex(323, 250);
    curveVertex(316, 233);
    curveVertex(316, 233);
    noFill();
    //fill(255);
    endShape();
// left iris
  beginShape();
  curveVertex(203, 233);
  curveVertex(203, 233);
  curveVertex(230, 232);
  curveVertex(225, 246);
  curveVertex(208, 246);
  curveVertex(203, 233);
  curveVertex(203, 233);
  fill(random(100, 255), random(100, 200), random(50, 200));
  //fill(255, 233, 0);
  endShape();
  // right iris
    beginShape();
    curveVertex(323, 230);
    curveVertex(323, 230);
    curveVertex(345, 230);
    curveVertex(341, 242);
    curveVertex(328, 243);
    curveVertex(323, 230);
    curveVertex(323, 230);
    endShape();
// left pupil
  beginShape();
  curveVertex(210, 233);
  curveVertex(210, 233);
  curveVertex(224, 232);
  curveVertex(220, 240);
  curveVertex(214, 240);
  curveVertex(210, 233);
  curveVertex(210, 233);
  noFill();
  //fill(0);
  endShape();
  // right pupil
    beginShape();
    curveVertex(328, 230);
    curveVertex(328, 230);
    curveVertex(335, 230);
    curveVertex(340, 230);
    curveVertex(339, 237);
    curveVertex(332, 238);
    curveVertex(328, 230);
    curveVertex(328, 230);
    noFill();
    //fill(0);
    endShape();
// left eyelash
  bezier(180, 235, 210, 230, 240, 226, 254, 238);
// right eyelash
  bezier(310, 236, 320, 226, 340, 225, 357, 234);
// nose
  bezier(300, 275, 315, 310, 325, 312, 292, 328);
  // nostril
    bezier(275, 314, 280, 314, 285, 314, 292, 317);
// upper lip
  bezier(280, 352, 288, 355, 291, 355, 294, 352);
  // lip left
    bezier(230, 366, 255, 369, 265, 361, 285, 366);
    // lip right
      bezier(295, 366, 310, 361, 320, 366, 322, 364);
      // lower lip
        bezier(280, 382, 288, 380, 293, 380, 295, 382);

fill(random(100, 255), random(100, 200), random(50, 200));
  // left eyebrow
    beginShape();
    curveVertex(260, 205);
    curveVertex(260, 205);
    curveVertex(257, 215);
    curveVertex(210, 203);
    curveVertex(170, 208);
    curveVertex(170, 205);
    curveVertex(210, 195);
    curveVertex(260, 205);
    curveVertex(260, 205);
    //noFill();
    endShape();
// right eyebrow
    beginShape();
    curveVertex(310, 205);
    curveVertex(310, 205);
    curveVertex(340, 198);
    curveVertex(362, 205);
    curveVertex(362, 208);
    curveVertex(340, 206);
    curveVertex(311, 215);
    curveVertex(310, 205);
    curveVertex(310, 205);
    //noFill();
    endShape();
// left hair
  //yellow hair
  //fill(212, 191, 3, 50);
    //fill(255, 251, 0);
  beginShape();
  vertex(323, 75);
  vertex(318, 90);
  vertex(173, 195);
  vertex(165, 185);
  endShape(CLOSE);
  //fill(195, 181, 7);
    //fill(255, 251, 0);
  beginShape();
  vertex(165, 185);
  vertex(173, 195);
  vertex(135, 318);
  vertex(120, 323);
  endShape(CLOSE);
  //fill(195, 181, 7);
    //fill(255, 251, 0);
  beginShape();
  vertex(120, 323);
  vertex(135, 318);
  vertex(178, 435);
  vertex(165, 430);
  endShape(CLOSE);
// hair green
  //fill(0, 65, 0, 50);
    //fill(87, 200, 25);
  beginShape();
  vertex(320, 60);
  vertex(323, 75);
  vertex(160, 160);
  vertex(140, 140);
  endShape(CLOSE);
    //fill(87, 200, 25);
  beginShape();
  vertex(140, 140);
  vertex(160, 160);
  vertex(120, 325);
  vertex(100, 330);
  endShape(CLOSE);
    //fill(87, 200, 25);
  beginShape();
  vertex(100, 330);
  vertex(120, 325);
  vertex(215, 435);
  vertex(185, 420);
  endShape(CLOSE);
// hair blue
  //fill(0, 35, 75, 50);
    //fill(23, 141, 208);
  beginShape();
  vertex(310, 50);
  vertex(320, 60);
  vertex(140, 140);
  vertex(130, 120);
  endShape(CLOSE);
    //fill(23, 141, 208);
  beginShape();
  vertex(130, 120);
  vertex(140, 140);
  vertex(100, 330);
  vertex(85, 316);
  endShape(CLOSE);
    //fill(23, 141, 208);
  beginShape();
  vertex(85, 316);
  vertex(100, 330);
  vertex(150, 420);
  vertex(130, 405);
  endShape(CLOSE);
// hair purple
  //fill(65, 0, 65, 50);
    //fill(133, 3, 149);
  beginShape();
  vertex(300, 42);
  vertex(310, 50);
  vertex(130, 120);
  vertex(120, 110);
  endShape(CLOSE);
    //fill(133, 3, 149);
  beginShape();
  vertex(120, 110);
  vertex(130, 120);
  vertex(85, 316);
  vertex(74, 307);
  endShape(CLOSE);
    //fill(133, 3, 149);
  beginShape();
  vertex(74, 307);
  vertex(85, 316);
  vertex(110, 384);
  vertex(98, 373);
  endShape(CLOSE);
// hair red
  //fill(100, 0, 0, 50);
    //fill(231, 15, 16);
  beginShape();
  vertex(286, 34);
  vertex(300, 42);
  vertex(120, 110);
  vertex(110, 101);
  endShape(CLOSE);
    //fill(231, 15, 16);
  beginShape();
  vertex(110, 101);
  vertex(120, 110);
  vertex(74, 307);
  vertex(64, 295);
  endShape(CLOSE);
    //fill(231, 15, 16);
  beginShape();
  vertex(64, 295);
  vertex(74, 307);
  vertex(98, 373);
  vertex(87, 368);
  endShape(CLOSE);
// hair orange
  //fill(185, 105, 0, 50);
    //fill(255, 164, 0);
  beginShape();
  vertex(273, 27);
  vertex(286, 34);
  vertex(110, 101);
  vertex(100, 92);
  endShape(CLOSE);
    //fill(255, 164, 0);
  beginShape();
  vertex(100, 92);
  vertex(110, 101);
  vertex(64, 295);
  vertex(53, 285);
  endShape(CLOSE);
    //fill(255, 164, 0);
  beginShape();
  vertex(53, 285);
  vertex(64, 295);
  vertex(87, 368);
  vertex(77, 362);
  endShape(CLOSE);
// right hair
// hair yellow
    //fill(212, 191, 3, 50);
      //fill(255, 251, 0);
    beginShape();
    vertex(318, 90);
    vertex(323, 75);
    vertex(370, 173);
    vertex(365, 178);
    endShape(CLOSE);
      //fill(255, 251, 0);
    beginShape();
    vertex(365, 178);
    vertex(370, 173);
    vertex(383, 315);
    vertex(375, 310);
    endShape(CLOSE);
      //fill(255, 251, 0);
    beginShape();
    vertex(375, 310);
    vertex(383, 315);
    vertex(350, 435);
    vertex(343, 420);
    endShape(CLOSE);
// hair green
    //fill(0, 65, 0, 50);
      //fill(87, 200, 25);
    beginShape();
    vertex(323, 75);
    vertex(320, 60);
    vertex(383, 170);
    vertex(370, 173);
    endShape(CLOSE);
      //fill(87, 200, 25);
    beginShape();
    vertex(370, 173);
    vertex(383, 170);
    vertex(390, 312);
    vertex(383, 315);
    endShape(CLOSE);
      //fill(87, 200, 25);
    beginShape();
    vertex(383, 315);
    vertex(390, 312);
    vertex(375, 428);
    vertex(365, 420);
    endShape(CLOSE);
}
