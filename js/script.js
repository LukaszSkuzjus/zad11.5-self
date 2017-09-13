function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype.create= function() {
	var self = this;
	self.$element = $('<button>');//mozna zawsze uzywac self
	this.$element.text(this.text);
	this.$element.click(function() {
		alert(self.text);
	});
	$('body').append(this.$element);
};

var btn1 = new Button('Hello!');
var btn2 = new Button('zad11.5-self');
btn1.create();
btn2.create();