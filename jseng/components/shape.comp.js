var Shape = function(_type, _x, _y, _width, _height, _color, _border_color) {
	this.parent = null;
	this.type = _type;
	this.x = _x;
	this.y = _y;
	this.width = _width;
	this.height = _height;
	this.color = _color;
	this.border_color = _border_color;
}
Shape.types = {
	CIRCLE: 0,
	RECTANGLE: 1
};

Shape.prototype = Object.create(new Component);
Shape.prototype.draw = function(ctx) {
	this.position.x = this.x + (this.parent.position? this.parent.position.x : 0);
	this.position.y = this.y + (this.parent.position? this.parent.position.y : 0);
	switch(this.type) {
		case Shape.types.CIRCLE:
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.strokeStyle = this.border_color;
			ctx.lineWidth = 1;
			ctx.arc(this.position.x + (this.width / 2), this.position.y + (this.height / 2), this.width / 2, 0, 2 * Math.PI, false);
			if (this.color)
				ctx.fill();
			if (this.border_color)
				ctx.stroke();
			ctx.restore();
			break;
		case Shape.types.RECTANGLE:
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.strokeStyle = this.border_color;
			ctx.rect(this.position.x, this.position.y, this.width, this.height);
			if (this.color)
				ctx.fill();
			if (this.border_color)
				ctx.stroke();
			ctx.restore();
			break;
	}
}