let lines, markov, data1, data2, foo, x = 160, y = 240;

function preload() {

  data1 = loadStrings('/books/beauty.txt');
  data2 = loadStrings('/books/wonderland.txt');
  

}

function setup() {

  foo = new p5.Speech(); // speech synthesis object 
   
  
  createCanvas(500, 500);
  textFont('helvetica', 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["click to (re)generate"];

  // create a markov model w' n=4
  markov = RiTa.markov(4);

  // load text into the model
  
  markov.addText(data1.join(' '));
  markov.addText(data2.join(' '));

  drawText();
}

function drawText() {
    foo.cancel();
  //foo.listVoices();
 // foo.setVoice(Math.floor(random(foo.voices.length))); // can voice
 
  
 
  
  background(50, 30, 40);
  fill(220);
  text(lines.join(' '), x, y, 420, 420);
  if(lines != "click to (re)generate"){
    foo.speak(lines); // say something 
  }
}

function mouseClicked() {
   foo.setVoice('Google UK English Female'); // can voice
  lines = markov.generate(4);
  x = y = 40;
  drawText();
}