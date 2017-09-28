// declare the setup function
function setup(){

  //create a canvas 400px high and 600 px wide
  createCanvas(600, 400);
  //color the background 'black'
  background('black');
}

// declare the draw function
function draw(){

  //tell p5 to print the text string HELLO WORLD...
  //this will be positioned at (x: 350, y: 350)
  text("HELLO WORLD ...", 350, 350);
  //fill text with white
  fill(255);
  //change to a common serif font
  textFont("Times New Roman");
  //make text larger
  textSize(25);
  //style text in italic
  textStyle(ITALIC);
}
