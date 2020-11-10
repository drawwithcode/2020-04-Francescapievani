let myImageDwight;
let capture;

function preload(){

myImageDwight = loadImage("./assets/images/dwight2.jpg");

}

function setup() {
createCanvas(windowWidth,windowHeight);
capture = createCapture(VIDEO);
capture.hide();

//to save photo
p2 = createP("Click ENTER to save your photo");
p2.position(windowWidth / 25, windowHeight * 10 / 13);


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
image(myImageDwight, windowWidth/2, 0 , myImageDwight.width/2.5, myImageDwight.height/2.5);

}

//come back to previous page
function nextStep() {
window.open("second.html", "_self");
}


// to save the photo
function keyPressed() {
  if (keyCode == ENTER) save("Dwight and I.jpg");
}
