level = function(){
	return {
		"isHit": function(p1, p2){
		distanceX = Math.abs(p1.left - p2.left);
		distanceY = Math.abs(p1.top - p2.top);

		if (((distanceX >= 0.0) && (distanceX <= 1.0))
				&& (((distanceY >= 0.0) && (distanceY <= 1.0))))
			return true;
		return false;
		}
	}
}