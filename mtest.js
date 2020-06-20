let x = 0
let mtestx = 0
let mtestx2 = 0
var button


function setup() {
  createElement('h1','Vertical Distortion Game')
  createP('Richard Breazeale, M.D.')
  createDiv('If you see distortion in the vertical white line below, then click the button.')
  //createP('The score is measured in pixels.')
  createCanvas(320, 320);
  createP('')
  button = createButton('Click here to make the distortion go away and then note your distortion score')//naming the button
  button.mousePressed(drawAgain)
  button.size(320.50)
  background(0);
  noLoop();
}

function draw() {
  background(0)
  fill (255)

  //fill in the vertical line with increasing
  //spaces between one pixel-wide dots
  for(y=0;y<height;y=y+1+x){
    noStroke()
  fill(255)
ellipse(width/2,y,1,1)
}
//fixation dots

  ellipse (140, height/2, 5, 1)
  ellipse (180, height/2, 5, 1)

//note how many cycles in console log to give m-score
  //console.log(x)
  text('Vertical distortion score is ' + x +' pixels.', 10, 20)
  //h1 = createP('The vertical distortion score is ' + x + ' pixels')

x=x+1//control the number of pixel spaces to add with
//each redraw
}
function drawAgain(){
  redraw(1);
}
//function mousePressed() {
  // drawAgain()
 //}
