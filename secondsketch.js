let myImage1;
let myCit1;
let myImage2;
let myCit2;
let myImage3;
let myCit3;

function preload(){

myImage1 = loadImage("./assets/images/michael.jpg");
myCit1 = loadSound("./assets/sounds/Michael.mp3");
myImage2 = loadImage("./assets/images/dwight.jpg");
myCit2 = loadSound("./assets/sounds/Dwight.mp3");
myImage3 = loadImage("./assets/images/jim.jpg");
myCit3 = loadSound("./assets/sounds/Jim.mp3");
}

function setup() {
createCanvas(windowWidth,windowHeight);

background("black");

myCit1.stop();
analyzer = new p5.Amplitude();
analyzer.setInput(myCit1);

myCit2.stop();
analyzer = new p5.Amplitude();
analyzer.setInput(myCit2);

myCit3.stop();
analyzer = new p5.Amplitude();
analyzer.setInput(myCit3);

// button TO LISTEN
buttonlistentoMichael= createButton("listen to Michael");
buttonlistentoMichael.position(windowWidth /2 -580, 190);
buttonlistentoMichael.mousePressed(play1);

buttonlistentoDwight= createButton("listen to Dwight");
buttonlistentoDwight.position(windowWidth /2 - 580, 490);
buttonlistentoDwight.mousePressed(play2);


buttonlistentoJim= createButton("listen to Jim");
buttonlistentoJim.position(windowWidth /2 - 580, 790);
buttonlistentoJim.mousePressed(play3);

// button TO CHOOSE AND GO TO NEXT STEP
buttonChooseMichael= createButton("choose Michael");
buttonChooseMichael.position(windowWidth /2 -580, 230);
buttonChooseMichael.mousePressed(nextStep1);

buttonChooseDwight= createButton("choose Dwight");
buttonChooseDwight.position(windowWidth /2 -580, 530);
buttonChooseDwight.mousePressed(nextStep2);

buttonlistentoJim= createButton("choose Jim");
buttonlistentoJim.position(windowWidth /2 -580, 830);
buttonlistentoJim.mousePressed(nextStep3);


}
function draw() {
  //titolo sfondo
  let myText1 = "Michael Scott";
  fill("white");
  textFont("Cutive Mono");
  textSize(27);
  text(myText1,windowWidth/7 ,160);

  let myText2 = "Dwight Schrute";
  fill("white");
  textFont("Cutive Mono");
  textSize(27);
  text(myText2,windowWidth/7 ,460);

  let myText3 = "Jim Halpert";
  fill("white");
  textFont("Cutive Mono");
  textSize(27);
  text(myText3,windowWidth/7 ,760);

 //imageS
image(myImage1, windowWidth/3, 30 , myImage1.width/10, myImage1.height/10);
image(myImage2, windowWidth/3, 330, myImage2.width/10, myImage2.height/10);
image(myImage3, windowWidth/3, 630, myImage3.width/10, myImage3.height/10);

}

//play the cit
function play1(){
    if (myCit1.isPlaying == true) {
      myCit1.pause();
    } else {
      myCit1.play();

    }
  }

function play2(){
    if (myCit2.isPlaying == true) {
      myCit2.pause();
    } else {
      myCit2.play();
    }
  }

function play3(){
    if (myCit3.isPlaying == true) {
      myCit3.pause();
    } else {
      myCit3.play();
    }
  }


  // to next step
  function nextStep1() {
    window.open("michael.html", "_self");
  }
  function nextStep2() {
    window.open("dwight.html", "_self");
  }
  function nextStep3() {
    window.open("jim.html", "_self");
  }
