test( "test launch at 90 degrees", function() {
	t1 = throwable("money", 10);
	equal(t1.points(), 10);
	t1.setInitialPosition(position(0,0));
	t1.setLaunch(90,0);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(-1.5).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(0).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(0.05).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,1).json();
	t1_pos = t1.getPosition(0.1).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,10).json();
	t1_pos = t1.getPosition(1).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,18).json();
	t1_pos = t1.getPosition(2).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,50).json();
	t1_pos = t1.getPosition(10).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,18).json();
	t1_pos = t1.getPosition(18).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(20).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,10).json();
	t1_pos = t1.getPosition(19).json();
	deepEqual(t1_pos, expected_pos);	
});

test( "test launch at 45 degrees", function() {
	t1 = throwable("money", 10);
	equal(t1.points(), 10);
	t1.setInitialPosition(position(0,0));
	t1.setLaunch(45,0);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(-1.5).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(0,0).json();
	t1_pos = t1.getPosition(0).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(7,7).json();
	t1_pos = t1.getPosition(1).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(14,12).json();
	t1_pos = t1.getPosition(2).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(71,21).json();
	t1_pos = t1.getPosition(10).json();
	deepEqual(t1_pos, expected_pos);

	expected_pos = position(99,1).json();
	t1_pos = t1.getPosition(14).json();
	deepEqual(t1_pos, expected_pos);
});