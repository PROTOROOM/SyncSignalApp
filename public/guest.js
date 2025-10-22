let socket;
let slideIndex = 0;
let ding;

function preload() {
  ding = loadSound("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowWidth * 0.08);
  textAlign(LEFT, TOP);

  socket = io();

  socket.on("slide", (index) => {
    slideIndex = index;
    if (ding && ding.isLoaded()) ding.play();
  });
}

function draw() {
  slides[slideIndex](this);
  fill(0);
//   text(`Slide: ${slideIndex + 1}`, 20, 20);
}
