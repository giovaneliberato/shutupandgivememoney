test( "test constructor", function() {
	p = position(10,5)
	equal(p.getX(), 10);
	equal(p.getY(), 5);
});