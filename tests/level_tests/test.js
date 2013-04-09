test( "test collision", function() {
	p1 = position(0,0);
	p2 = position(0,0);

	level = level();
	ok(level.isHit(p1,p2));
	ok(level.isHit(p1,position(1,0)));
	ok(level.isHit(p1,position(-1,0)));
	ok(level.isHit(p1,position(0,1)));
	ok(level.isHit(p1,position(0,-1)));
	ok(level.isHit(p1,position(1,1)));
	ok(level.isHit(p1,position(1,-1)));
	ok(level.isHit(p1,position(-1,1)));
	ok(level.isHit(p1,position(-1,-1)));

	equal(level.isHit(p1,position(1.1,0)), false);
	equal(level.isHit(p1,position(-1.1,0)), false);
	equal(level.isHit(p1,position(0,1.1)), false);
	equal(level.isHit(p1,position(0,-1.1)), false);
	equal(level.isHit(p1,position(1.1,1)), false);
	equal(level.isHit(p1,position(1,-1.1)), false);
	equal(level.isHit(p1,position(-1.1,1)), false);
	equal(level.isHit(p1,position(-1.1,-1.1)), false);
});