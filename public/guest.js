let socket;
let slideIndex = 0;
let ding;


function preload() {
  ding = loadSound("sounds/sine.wav");
  click1 = loadSound("sounds/click1.wav");
  click2 = loadSound("sounds/click2.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);

//   u = windowWidth * 0.06;
//   textSize(u);
  textAlign(LEFT, TOP);

  socket = io();

  socket.on("slide", (index) => {
    slideIndex = index;
    if (getAudioContext().state == "running") {
      if (ding && ding.isLoaded()) ding.play();
    }
    
  });
}

function draw() {
  slides[slideIndex](this);
  fill(0);
//   text(`Slide: ${slideIndex + 1}`, 20, 20);
}

function mouseClicked() {
    if (click1 && click1.isLoaded()) click1.play();
}

function touchEnded() {
    // if (getAudioContext().state !== "running") {
    //   getAudioContext().resume();
    // }
    if (click1 && click1.isLoaded()) click1.play();
    // if (slideIndex == 0) {
    //     if (random([1, 2]) == 1) {
    //         if (click1 && click1.isLoaded()) click1.play();
    //     } else {
    //         if (click2 && click2.isLoaded()) click2.play();
    //     }
    // }
}
