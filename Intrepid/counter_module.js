/*WordCounter Module for Quill*/ 

var Module = Quill.import('core/module');

class WordCounter extends Module {
	constructor(quill, options){
		super(quill, options);
		var container = document.querySelector('#counter');
		this.quill.on('text-change', function() {
		    var text = quill.getText();
		    wordCount = text.split(/\s+/).length - 1;
		    container.innerHTML = wordCount;
		    // console.log("Word Counter Module: Text Change Heard");
		});
	}
}

Quill.register({
  'modules/WordCounter': WordCounter,
});