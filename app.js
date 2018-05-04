'use strict';

const Homey = require('homey');

async function play(speech) {
	await speech.say(Homey.__('play'));
	const choice = Math.floor((Math.random() * 3) + 1);
	await speech.say('3, 2, 1');
	switch (choice) {
		case 1:
			speech.say(Homey.__('rock'));
			break;
		case 2:
			speech.say(Homey.__('paper'));
			break;
		case 3:
			speech.say(Homey.__('scissors'));
			break;
		default:
			speech.say('error');
	}
}

class rockPaperScissorsApp extends Homey.App {
	onInit() {
		this.log('Rock Paper Scissors app started!');
		// register some error listeners
		process.on('unhandledRejection', (error) => {
			this.error('unhandledRejection! ', error);
		});
		process.on('uncaughtException', (error) => {
			this.error('uncaughtException! ', error);
		});
		Homey.ManagerSpeechInput.on('speechEval', (speech, callback) => {
			// eval is always corect in this case :)
			callback(null, true);
		});
		Homey.ManagerSpeechInput.on('speechMatch', (speech) => {
			play(speech);
		});
	}
}

module.exports = rockPaperScissorsApp;
