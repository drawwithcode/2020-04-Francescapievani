let myImageCover;
let myImagePlay;
let mySong;

function preload(){
//preload the file for the background
myImageCover = loadImage("./assets/images/theoffice_cover.png");
myImagePlay = loadImage("./assets/images/play.png");
//preload the file for the song
mySong = loadSound("./assets/sounds/The Office Theme Song.mp3");
}

function setup() {
createCanvas(windowWidth,windowHeight);
background("black");

analyzer = new p5.Amplitude();
analyzer.setInput(mySong);

// button
buttonEnter = createButton("Get into the office");
buttonEnter.position(windowWidth /4 - 5, windowHeight * 6 / 7);
buttonEnter.mousePressed(nextStep);

}

function draw() {
  //testi
  let myText = "Get inside the office and choose your best colleague";
  fill("white");
  textFont("Cutive Mono");
  textSize(27);
  text(myText,windowWidth/4 ,40);

  let myText2 = "Play the song";
  fill("white");
  textFont("Cutive Mono");
  textSize(20);
  text(myText2,windowWidth/4 - 10 ,windowHeight/4 + 130);
 //images
 push();
imageMode(CENTER);
image(myImageCover, windowWidth/2, windowHeight/2,myImageCover.width/10, myImageCover.height/10);
pop();

push();
image(myImagePlay,  windowWidth/4 - 30,  windowHeight/4 + 160, myImagePlay.width/13, myImagePlay.height/13);
pop();
}

function mouseClicked(){
if(mySong.isPlaying() == false){
mySong.play();

}
}

// to next step
function nextStep() {
  window.open("second.html", "_self");
}
