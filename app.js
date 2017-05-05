"use strict";

Homey.log("app.js started");

Homey.manager('speech-input').on('speech', function(speech, callback){
    //console.log("speech", speech); // {transcript: "play spiderman", matches: {...}, words: [...], ...}
    var game = /(rock paper scissors)/gi;
    callback( null, speech.transcript.match(game) );
});

Homey.manager('speech-input').on('speechMatch', function(speech, onSpeechData){
    //console.log("speech", speech); // {transcript: "play spiderman", matches: {...}, words: [...], ...}
    //console.log("onSpeechData", onSpeechData); // ["spiderman"]
		sayChoice();
});


function sayChoice () {

	Homey.manager('speech-output').say( __("play"));
	Homey.manager('speech-output').say( " ");
	var i;
	for (i = 3; i > 0; i--) {
		Homey.manager('speech-output').say(i.toString());
		Homey.manager('speech-output').say( " ");
		Homey.manager('speech-output').say( " ")
	};

	var keuze=Math.floor((Math.random() * 3) + 1);;
	if (keuze==1) {
		console.log("rock");
		Homey.manager('speech-output').say( __("rock") );
	};
	if (keuze==2) {
		console.log("paper");
		Homey.manager('speech-output').say( __("paper") );
	};
	if (keuze==3) {
		console.log("scissors");
		Homey.manager('speech-output').say( __("scissors") );
	};
}
