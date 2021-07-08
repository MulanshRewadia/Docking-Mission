var part1Image,part2Image,part3Image,part4Image,stationImage;
var station;
var bg,bgImage;
function preload()
{
  part1Image = loadImage("spacecraft1.png");
  bgImage = loadImage("spacebg.jpg");
  part2Image = loadImage("spacecraft2.png");
  part3Image = loadImage("spacecraft3.png");
  part4Image = loadImage("spacecraft4.png");
  stationImage = loadImage("iss.png");
}


function setup() {
  createCanvas(1000,750);

  bg = createSprite(780,375,50,50);
  bg.addImage(bgImage);
  bg.scale = 3;

  station = createSprite(500, 100, 50, 50);
  station.addImage(stationImage);
  station.scale = 0.6;

  part1 = createSprite(200,700);
  part1.addImage(part1Image);
  part1.scale = 0.13;
  
}

function draw() {
  background(255,255,255);  

  

  if (keyIsDown(RIGHT_ARROW) ) {
    
    part1.x = part1.x + 1;
    part1.changeImage(part4Image);

}
if (keyIsDown(LEFT_ARROW) ) {
    
   part1.x = part1.x - 1; 
   part1.changeImage(part3Image);  

}

if(keyIsDown(UP_ARROW))
{
  part1.y = part1.y - 1;
  part1.changeImage(part2Image);
}

if(part1.x > 422 && part1.y < 178 && part1.x < 612 && part1.y < 69)
{
    fill("blue");
    stroke(4);
    text("Docking Successful",500,375);
}


console.log(part1.x);
console.log(part1.y);

  drawSprites();
}