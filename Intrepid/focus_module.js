/*FocusMode Module for Quill*/ 

var Module = Quill.import('core/module');

class Focus extends Module {
	constructor(quill, options){
		super(quill, options);
		this.quill.on('text-change', function(delta) {
			if (delta.ops.length < 2) return; //avoid error
			var action = Object.keys(delta.ops[1])[0];
			if (action == 'insert') { 
				console.log('insert');
			}
			else if (action == 'delete'){
				console.log('delete');
			}
		});
	}
}

Quill.register({
  'modules/Focus': Focus,
});

// console.log("registered");