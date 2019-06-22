/*FocusMode Module for Quill*/ 

var Module = Quill.import('core/module');

class Focus extends Module {
	constructor(quill, options){
		super(quill, options);
		this.quill.on('text-change', function(delta) {

			//break if not insertion or deletion
			if (delta.ops.length < 2) return;
			//find last index of !, ., or ?
			var text = quill.getText();
			var lastIndex = Math.max(text.lastIndexOf("!"),
				text.lastIndexOf("?"), text.lastIndexOf("."));


			if (modeToggle['Focus'] == 1){
				//make all text before this point white
				quill.formatText(0, lastIndex, 'color', 'white')
				//make all text after this point black
				quill.formatText(lastIndex, text.length, 'color', 'black');
			}
			else if (modeToggle['Focus'] == 0){
				quill.formatText(0, quill.getLength(), 'color', 'black');
			}
			else if (modeToggle['Focus'] == 2){
				quill.formatText(0, lastIndex, 'color', 'grey')
				//make all text after this point black
				quill.formatText(lastIndex, text.length, 'color', 'black');
			}
			
		});
	}
}

Quill.register({
  'modules/Focus': Focus,
});

// console.log("registered");

//TO DO: 
//Add interface support for light grey mode