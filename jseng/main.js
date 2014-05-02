function JSEng() {
	var include = function(url) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;

		head.insertBefore(script, head.firstChild);
	}
	include('jseng/vector2d.js');
	include('jseng/components/main.comp.js');
	include('jseng/components/shape.comp.js');
	include('jseng/components/move.comp.js');
	include('jseng/components/input.comp.js');

	var currentTime = 0,
		delta = 0,
		lastTime = (new Date()).getTime(),
		fps = 60,
		cur_fps = 0,
		interval = 1000 / fps,
		mspf = 0,
		prevTime = 0;
	var canvas = null,
		ctx = null;
	var debug = true,
		self = this;

	this.stage = null;

	this.init = function(width, height) {
		canvas = document.createElement('canvas');
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");

		this.stage = new Component();

		requestAnimationFrame(update.bind(self));
	}

	var update = function() {
		currentTime = (new Date()).getTime();
	    delta = (currentTime - lastTime);

	    if(delta > interval) {
	    	mspf = currentTime - prevTime;
			cur_fps = Math.round(1000 / (delta - (delta % interval)));

			if (this.stage) {
				this.stage.doUpdate(mspf);
			}
			draw();

        	lastTime = currentTime - (delta % interval);
	    	prevTime = currentTime;
		}
		requestAnimationFrame(update.bind(self));
	}
	var draw = function() {
		//Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (self.stage) {
			self.stage.doDraw(ctx);
		}
		
		if(debug) {
			ctx.font = "20px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign = 'left';
			ctx.fillText('fps: ' + cur_fps, 10, 20);			
		}
	}
}