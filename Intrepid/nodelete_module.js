/*No Delete Module for Quill*/ 

//Note that this requires "History" is used in userOnly mode

var Module = Quill.import('core/module');


class NoDelete extends Module {
	constructor(quill, options){
		super(quill, options);
		//Check if NoDelete mode is on
		this.quill.on('text-change', function(delta) {
			if (modeToggle['NoDelete'] == false) return;
			console.log("NoDelete on");
			for (var i=0; i < delta.ops.length; i++){
				var operation = Object.keys(delta.ops[i])[0];
				if (operation == 'delete'){
					console.log('delte');
					quill.history.undo();
				}
			}
		});
	}
}

Quill.register({
  'modules/NoDelete': NoDelete,
});

// console.log("registered");