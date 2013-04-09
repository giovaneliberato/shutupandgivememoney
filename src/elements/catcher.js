catcher = function(type){
	var _type = type;
	var _position;
	var _points = 0;
	return {
		"type": function(){ return _type},
		"setPosition": function(position){ _position = position},
		"getPosition": function(){return _position},
		"points": function(){return _points},
		"incrPoints": function(points){ _points += points}
	}
}