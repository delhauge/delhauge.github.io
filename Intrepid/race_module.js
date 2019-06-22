/*RaceTheLock Module for Quill*/ 

var Module = Quill.import('core/module');


class RaceTheClock extends Module {
	constructor(quill, options){
		super(quill, options);
		function everySecond(){
			//wordRate must default to some value above bottom rate
			var wordRate = 100;
			//if you fall below this wpm, everything is deleted
			var bottomRate = document.getElementById('min-wpm').value;

			clock += 1; //tick the clock
			console.log("Clock: " + clock);

			//Break if timer not started
			if (!modeToggle['RaceTheClock']) return;

			//Update Timer
			var timeRemaining = endTime - clock;
			var minLeft = Math.floor(timeRemaining/60);
			var secLeftOver = timeRemaining - minLeft*60;
			if (secLeftOver < 10) secLeftOver = '0'+secLeftOver;
			document.getElementById('timer').innerHTML = minLeft + ":" + secLeftOver;

			var wordsSinceStart = wordCount - startWordCount;

			if (wordsSinceStart >= 3 && clock != 0){
				wordRate = Math.round(wordsSinceStart/(clock-startTime)*60); //in words/min
				document.getElementById('wordRate').innerHTML = wordRate;
			}
			if (wordRate < bottomRate){
				quill.deleteText(0,quill.getLength());
				document.getElementById('timer').innerHTML = 'YOU FAILED!!!!!';
				toggleMode('RaceTheClock');
			}
			if (clock >= endTime){ //turn off once end time reached
				toggleMode('RaceTheClock');
				document.getElementById('timer').innerHTML = 'YOU DID IT!!!!!';
			}
		}

		var intervalId = setInterval(everySecond, 1000); //start the clock
	}
}

Quill.register({
  'modules/RaceTheClock': RaceTheClock,
});

// console.log("registered");