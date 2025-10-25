let s5title1 = "사운드로 매개하지만, 데이터에 대해 말하려고 합니다.";
let s5title2 = "데이터에 대해 말하지만, 사운드로 매개하려고 합니다.";

let u;

function setU() {
  u = windowWidth * 0.06;
}

let slides = [
  //00
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
    p.text("Matter", 10, u*9);
    p.text("Matters", 10, u*11);

    back1(p);

    p.fill(220, 230, 220, 220);
    p.rect(0, u*15, windowWidth, u*5.5);
    p.fill(0);
    pText(p, 40, u*16, u, "화면을 몇 번 두드려서 소리가 나는지 확인해주세요. 소리가 나지 않으면 새로고침을 합니다.");
  },
  //00
  (p) => {
    setU();
    p.background(220, 255, 220);
    
    p.textSize(u*2);
    p.textStyle(BOLD);
    p.fill(0);
    p.text("", 10, u);
    p.text("PROTOROOM", 10, u*4);
    p.textSize(u*2.5);
    // p.text("0.000001GB", 10, u*7);
    p.text("Matter", 10, u*9);
    p.text("Matters", 10, u*11);
    p.text("탐색적 작곡", 10, u*14);
    back1(p);

    // p.fill(220, 230, 220, 220);
    // p.rect(0, u*15, windowWidth, u*5.5);
    // p.fill(0);
    // pText(p, 40, u*16, u, "화면을 몇 번 두드려서 소리가 나는지 확인해주세요. 소리가 나지 않으면 새로고침을 합니다.");
  },

  (p) => {
    setU(); 
    p.background(0, 0, 0); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(255);

    pText(p, u*0.5, u*3, u, "여러 소리가 들릴 것입니다. 여러분의 스마트폰도 벨 소리를 낼 것입니다. 무음모드가 아닐테니 외부의 전화나 메시지가 올 수도 있습니다. 괜찮습니다.");

  },


  // ========================================== Scene 1
  //1-1
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#1-1", u, u);

    pText(p, u*0.5, u*3, u*1.5, "1 KB = 0.000001 GB");
    
  },
  //1-2
  (p) => {
    setU(); 
    p.background(255, 255, 255); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#1-2", u, u);
    
    pText(p, u*0.5, u*3, u*1.5, "1 KB = 0.000001 GB");
    pText(p, u*0.5, u*7, u, "아래는 1 KB 크기의 이미지 파일입니다.");
    p.image(png1k, width/2, height/2);
    p.textStyle(NORMAL);
    pText(p, u*0.5, height/2+u, u*0.5, "1kb.png by Jeanpaulmars is licensed under CC-BY-SA 3.0 via Wikimedia Commons");
  }, 
  //1-3
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#1-3", u, u);

    pText(p, u*0.5, u*3, u*1.5, "1 KB = 0.000001 GB");
    pText(p, u*0.5, u*10, u, "우리는 지금부터 0.000001 GB 라는 먼지와 같은 작은 데이터로 물리적 공간에 소리를 쌓아보려고 합니다.");
    
  },  

  // ========================================== Scene 2
  //2-1
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#2-1", u, u);

    pText(p, u*0.5, u*3, u*1.2, "((t >> 16) * 7 | (t >> a) * 8 | (t >> b) * 7) & (t >> 7) = ? ");
    
  },
  //2-2
  (p) => {
    setU(); 
    p.background(100, 100, 255); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#2-2", u, u);

    pText(p, u*0.5, u*3, u*1.2, "((t >> 16) * 7 | (t >> a) * 8 | (t >> b) * 7) & (t >> 7) = ? ");
    pText(p, u*0.5, u*8, u, "1KB를 구성하는 계산식 중 하나입니다. 이런 수식을 계산하는 악기를 모았습니다.");
  },
  //2-3
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#2-3", u, u);

    pText(p, u*0.5, u*3, u*1.2, "((t >> 16) * 7 | (t >> a) * 8 | (t >> b) * 7) & (t >> 7) = ? ");
    pText(p, u*0.5, u*11, u, "이 계산식의 결과값은 우리에게 아무런 의미가 없습니다. 이 값을 소리로 보냈을 때 노이즈 혹은 리듬이 발생합니다.");
  },


  // ========================================== Scene 3
  //3-1
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#3-1", u, u);

    pText(p, u*0.5, u*3, u*1.2, "탐색적 작곡");
    
  },
  //3-2
  (p) => {
    setU(); 
    p.background(100, 100, 255); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#3-2", u, u);

    pText(p, u*0.5, u*3, u*1.2, "탐색적 작곡");
    pText(p, u*0.5, u*6, u, "예측하기 힘든 소음, 반복되는 기계음, 누군가에게는 의미있을 리듬");
    pText(p, u*0.5, u*10, u, "물리적 장치로 인해 발생하는 글리치는 제거가 아닌 탐색의 대상입니다.");
  },
  //3-3
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#3-3", u, u);

    pText(p, u*0.5, u*3, u*1.2, "탐색적 작곡");
    pText(p, u*0.5, u*13, u, "겹쳐서 어울림을 만들기도 하고, 흩어져서 잡음이 되기도 합니다.");
  },



  // ========================================== 
  //4-1
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#4-1", u, u);

    pText(p, u*0.5, u*3, u*1.2, "탐색을 기다리며");
    pText(p, u*0.5, u*6, u, "끝없는 가능성이 남아 있으니 귀 기울이고 탐색하세요. 별거 아닌 작은 존재가, 그리고 잡음이 당신에게 의미를 가지는 순간을 경험하길 바랍니다. ");
    
  },
  //4-2
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#4-2", u, u);

    pText(p, u*0.5, u*3, u*1.2, "탐색을 기다리며");
    pText(p, u*0.5, u*13, u, "평소보다 천천히 공간을 자유롭게 걸으면서 소리 변화를 들어보세요.");
    
  },

  // ========================================== 5
  (p) => {
    setU(); 
    p.background(0, 0, 0); 

    p.textSize(u*2);
    p.textStyle(BOLD);
    p.fill(255);

    pText(p, u*0.5, u*9, u*3, "귀 기울여 들어주세요.");

  },
  //5-1
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-1", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title1);
    pText(p, u*0.5, u*9, u, "");
    
  },
  //5-1
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-1", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title2);
    pText(p, u*0.5, u*9, u, "");
    
  },

  //5-2
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-2", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title1);
    pText(p, u*0.5, u*8, u, "누군가는 빅데이터를 이야기하고, 또 누군가는 학습할 데이터가 없다고 말합니다.");
    
  },
  //5-2
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-2", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title2);
    pText(p, u*0.5, u*8, u, "사운드는 변화를 직관적으로 알아차리기 쉽습니다.");
    
  },

  //5-3
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-3", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title1);
    pText(p, u*0.5, u*11, u, "데이터는 그 내용은 물론, 크기와 소비되는 방식으로만 가치 판단할 수 없습니다.");
    
  },
  //5-3
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-3", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title2);
    pText(p, u*0.5, u*11, u, "유희적인 사운드는 더 깊은 탐색을 가능하게 합니다.");
    
  },

  //5-4
  (p) => {
    setU(); 
    p.background(255, 100, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-4", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title1);
    pText(p, u*0.5, u*14, u, "동적으로 실행되는 데이터는 맥락에 따라 탐색의 범위가 넓어집니다. 즉, 1KB조차 탐색할 범위는 방대해집니다.");
    
  },
  //5-4
  (p) => {
    setU(); 
    p.background(100, 255, 100); 

    p.textSize(u);
    p.textStyle(BOLD);
    p.fill(0);

    p.text("#5-4", u, u);

    pText(p, u*0.5, u*3, u*1.2, s5title2);
    pText(p, u*0.5, u*14, u, "사운드...");
    
  },

  // ========================================== End
  (p) => {
    setU(); 
    p.background(0, 0, 0); 

    p.textSize(u*2);
    p.textStyle(BOLD);
    p.fill(255);

    p.text("감사합니다.", u, height-u*4);
  },
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
