let socket;
let slideIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(LEFT, TOP);

  socket = io();
  socket.on("slide", (index) => {
    slideIndex = index;
  });
}

function draw() {
  slides[slideIndex](this);
  fill(0);
  text(`Slide: ${slideIndex + 1}`, 20, 20);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) slideIndex = (slideIndex + 1) % slides.length;
  if (keyCode === LEFT_ARROW) slideIndex = (slideIndex - 1 + slides.length) % slides.length;

  socket.emit("changeSlide", slideIndex);
}
