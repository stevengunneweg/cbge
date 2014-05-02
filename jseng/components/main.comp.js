var Component = function () {
	this.position = Vector.Zero();
}
Component.id = 0;
Component.prototype = {
	components: {},

	doUpdate: function(mspf) {
		this.update(mspf);
		for (var id in this.components) {
			if(this.components[id].update) {
				this.components[id].update(mspf);
			}
		}
	},
	update: function(mspf) {
	},

	doDraw: function(ctx) {
		this.draw(ctx);
		for (var id in this.components) {
			if(this.components[id].draw) {
				this.components[id].draw(ctx);
			}
		}
	},
	draw: function(ctx) {
	},
	addComponent: function(component) {
		this.components[Component.id] = component;
		component.id = Component.id;
		component.parent = this;
		Component.id++;
	},
	removeComponent: function(component) {
		delete this.components[component.id];
	},
	getPosition: function() {
		return this.position;
	},
	setParent: function(parent) {
		this.parent = parent;
	}
};