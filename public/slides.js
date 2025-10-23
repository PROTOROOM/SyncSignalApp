let u;
function setU() {
  u = windowWidth * 0.06;
}

let slides = [
  //01
  (p) => {
    setU();
    p.background(220, 255, 220);
    
    p.textSize(u*3);
    p.textStyle(BOLD);
    p.fill(0);
    p.text("동기신호", 10, u);
    p.text("프로토룸", 10, u*4);
    p.textSize(u*2.5);
    p.text("0.000001GB", 10, u*7);
    p.text("Matter", 20, u*9);
    p.text("Matters", 20, u*11);

    back1(p);

    p.fill(200, 180, 180, 180);
    p.rect(0, u*14, windowWidth, u*4);
    p.fill(0);
    pText(p, 40, u*15, u, "화면을 몇 번 두드려서 소리가 나는지 확인해주세요.");
  },
  //02
  (p) => { 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.text("#01", u, u);
    
  },
  
  //03
  (p) => {
    p.background(100, 255, 100); 
        
    p.textSize(u);
    p.text("#02", u, u); },
  
  //04
  (p) => { 
    p.background(100, 100, 255); 
    
    p.textSize(u);
    p.text("#03", u, u); }
];


function pText(p, sx, sy, fontSize, str, margin = 40) {
  p.textSize(fontSize);
  p.textLeading(fontSize * 1.4); // 줄 간격
  let words = str.split(" ");
  let x = sx;
  let y = sy;
  let line = "";

  for (let w of words) {
    let testLine = line + w + " ";
    let testWidth = p.textWidth(testLine);

    if (testWidth > width - margin * 2) {
      // 화면 폭 넘어가면 줄바꿈
      p.text(line, x, y);
      line = w + " ";
      y += fontSize * 1.4;
    } else {
      line = testLine;
    }
  }
  // 마지막 줄 출력
  p.text(line, x, y);
}


function back1(p) {
  let spacing1 = u*0.42;
  let dotSize1 = u*0.32;
  let speed1 = 1;

  let spacing2 = u*0.41;
  let dotSize2 = u*0.31;
  let speed2 = -1; 

    // p.background(190, 255, 190);

    p.noStroke();
    p.fill(30, 100, 30, 220);

    // --- Draw the first grid ---
    let offset1 = (p.frameCount * speed1) % spacing1;
    
    for (let x = -spacing1; x < p.width + spacing1; x += spacing1) {
      for (let y = -spacing1; y < p.height + spacing1; y += spacing1) {
        p.circle(x + offset1, y + offset1, dotSize1);
      }
    }

    p.fill(0, 80, 0, 220);
    // --- Draw the second grid ---
    let offset2 = (p.frameCount * speed2) % spacing2;
    
    for (let x = -spacing2; x < p.width + spacing2; x += spacing2) {
      for (let y = -spacing2; y < p.height + spacing2; y += spacing2) {   
        p.circle(x + offset2, y + offset2, dotSize2);
      }
    }
}
