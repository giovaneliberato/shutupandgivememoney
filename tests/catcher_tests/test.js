test( "test objects", function() {
	c1 = catcher("catcher1")
	equal(c1.type(), "catcher1");

	c1 = catcher("catcher2")
	equal(c1.type(), "catcher2");
});

test( "test position", function() {
	c1 = catcher("catcher1")
	c1.setPosition(position(10,5));
	var pos = c1.getPosition();
	equal(pos.getX(), 10);
	equal(pos.getY(), 5);
});

test( "test points", function() {
	c = catcher();
	equal(c.points(), 0);
	c.incrPoints(10);
	equal(c.points(), 10);
});