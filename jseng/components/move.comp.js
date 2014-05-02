var Move = function(_parent, _velocity) {
	this.parent = _parent;
	this.velocity = _velocity;
}

Move.prototype = Object.create(new Component);
Move.prototype.update = function(mspf) {
	this.parent.x += this.velocity.x * (10 / mspf);
	this.parent.y += this.velocity.y * (10 / mspf);
}