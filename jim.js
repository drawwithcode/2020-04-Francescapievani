let myImageJim;
let capture;

function preload(){

myImageJim = loadImage("./assets/images/jim2.png");

}

function setup() {
createCanvas(windowWidth,windowHeight);
capture = createCapture(VIDEO);
capture.hide();

//to save photo
p3 = createP("Click ENTER to save your photo");
p3.position(windowWidth / 25, windowHeight * 10 / 13);


// button
buttonStart = createButton("Click here to come back to other colleagues");
buttonStart.position(windowWidth / 25, windowHeight * 11 / 13);
buttonStart.mousePressed(nextStep);



}
function draw() {

  // webcam
    if (capture.loadedmetadata) {
      push();
      imageMode(CENTER);
      translate(windowWidth / 2, windowHeight / 2);
      scale(-1, 1);
      image(capture, 0, 0, width, width * capture.height / capture.width);
      pop();
    }

 //image
image(myImageJim, windowWidth/2, 0 , myImageJim.width/2.5, myImageJim.height/2.5);

}

//come back to previous page
function nextStep() {
window.open("second.html", "_self");
}

// to save the photo
function keyPressed() {
  if (keyCode == ENTER) save("Jim and I.jpg");
}
