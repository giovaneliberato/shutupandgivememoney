position = function(position_x ,position_y){
	var x = position_x;
	var y = position_y;
	return {
		"json": function(){ return {"x": Math.round(x), "y": Math.round(y)}},
		"getX": function(){ return x},
		"getY": function(){ return y},
	}
}