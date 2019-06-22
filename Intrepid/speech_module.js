/*Speech Sythesis Model*/ 

var Module = Quill.import('core/module');

class Speech extends Module {
	constructor(quill, options){
		super(quill, options);
		this.quill.on('text-change', function(delta) {
			if (modeToggle['Speech'] == false) return;

			var insertFound = false;
			for (var i=0; i < delta.ops.length; i++){
				var operation = Object.keys(delta.ops[i])[0];
				if (operation == 'insert'){
					insertFound = true;
					break;
				}
			}
			//Leave if no insertion found
			if (!insertFound) return;			


			var text = quill.getText();
			//If the last character is a space, read the last word
		    if (text[text.length-2] == " "){
		    	var words = text.split(/\s+/);
		    	var lastWord = words[words.length-2];

		    	//Speech sythnesis stuff
		    	var msg = new SpeechSynthesisUtterance();
		    	msg.text = lastWord;
		    	msg.volume = .5;
		    	msg.rate= .7;
		    	msg.pitch = 1;
		    	msg.voice = speechSynthesis.getVoices()[0];
		    	window.speechSynthesis.speak(msg);
		    }
		});
	}
}

Quill.register({
  'modules/Speech': Speech,
});

// console.log("registered");

//TO DO:
//Add options to change different speech settings
