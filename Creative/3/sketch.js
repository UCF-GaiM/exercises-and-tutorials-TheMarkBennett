// Copyright (c) 2020 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Object Detection using COCOSSD
This example uses a callback pattern to create the classifier
=== */

let objectDetector;
let img;
let input;
let button;
let url;


function preload() {
 // img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1280px-Eopsaltria_australis_-_Mogo_Campground.jpg');
  // Models available are 'cocossd', 'yolo'
  
}

function setup() {
  createCanvas(640, 420);
  let div = createDiv('Using the input field below add an image url and see if the computer can guess what it is.');
  div.position(0, 0);
  input = createInput();
  input.position(0, 25);
  objectDetector = ml5.objectDetector('cocossd');

  button = createButton('submit');
  button.position(input.x + input.width, 25);
  button.mousePressed(imgLoad);
  
  

}

function imgLoad(){
   url = input.value();    
    loadImage( url , img => {
    let scale = 0.8;
    imageMode(CENTER);
    image( img , 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width); // to fit width
     
      objectDetector.detect( img, gotResult);
  });
  
  
  
  
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
  console.log(img)  
  if (err) {
    console.log(err);
  }

  for (let i = 0; i < results.length; i += 1) {
    noStroke();
    fill(0, 255, 0);
    text(
      `${results[i].label} ${nfc(results[i].confidence * 100.0, 2)}%`,
      results[i].x + 5,
      results[i].y + 15
    );
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(results[i].x, results[i].y, results[i].width, results[i].height);
  }
}