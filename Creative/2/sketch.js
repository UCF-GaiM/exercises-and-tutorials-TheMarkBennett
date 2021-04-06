let foo;

function setup() { 
  
   foo = new p5.Speech(); // speech synthesis object  

  
  createCanvas(400, 400);
  background(255);
  textAlign(LEFT, TOP);
  textSize(24);
  text("Click for ~messages from another world~",
       20, 20, width-40, height-40);
} 


function draw() { 
}


function mousePressed() {
  foo.cancel();  foo.setVoice(Math.floor(random(foo.voices.length))); // can voice
  
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  var output = grammar.flatten("#origin#");
  background(255);
  text(output, 20, 20, width-40, height-40);
  
  foo.speak(output); // say something 
  
  
  
}

var grammarSource = {
	"origin": [
		"When I’m #mood# at my #name#, I ask them to help me find #find# and then put it in my pocket."
	],
	"name": [
		"husband",
		"wife",
		"girlfriend",
		"boyfriend",
		"lover"
	],
	"mood": [
		"mad",
		"angry",
		"upset"
	],
	"find": [
		"my phone",
		"the remote",
		"my keys",
		"my mask",
		"my hand sanatizer",
		"",
		"my ear ring",
		"my glasses",
		"my watch"
	]
};



