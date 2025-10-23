let socket;
let slideIndex = 0;
let bHome, bPrev, bNext;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);

  bHome = createButton('H');
  bPrev = createButton('P');
  bNext = createButton('N');
  bHome.position(windowWidth/2-50, windowHeight-100);
  bPrev.position(0, windowHeight-100);
  bNext.position(windowWidth-100, windowHeight-100);
  bHome.size(100, 100);
  bPrev.size(100, 100);
  bNext.size(100, 100);   
  bHome.mousePressed(gHome);
  bPrev.mousePressed(gPrev);
  bNext.mousePressed(gNext);


//   textSize(windowWidth * 0.06);
  textAlign(LEFT, TOP);

  socket = io();
  socket.on("slide", (index) => {
    slideIndex = index;
  });
}

function draw() {
  slides[slideIndex](this);
  fill(0);
//   text(`Slide: ${slideIndex + 1}`, 20, 20);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) gNext();
  if (keyCode === LEFT_ARROW) gPrev();

}

function send() {
    socket.emit("changeSlide", slideIndex);
}

function gHome() {
    slideIndex = 0;
    send();
}

function gPrev() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    send();
}

function gNext() {
    slideIndex = (slideIndex + 1) % slides.length;
    send();
}
