var GRAVITY = -1;


throwable = function(type, points){
	var _points = points;
	var velo = 1000;
	var _type = type;
	var _initial_position;
	var _launch_angle;
	var _launch_time;
	return {
		"points": function(){ return _points},
		"type": function(){ return _type},
		"setInitialPosition": function(position){ 
			_initial_position = position},
		"setLaunch": function(angle, time){
			_launch_angle = angle;
			_launch_time = time;
		},
		"getPosition": function(time){
			if (time <=_launch_time) return _initial_position;
			var deltaT = time - _launch_time;
			var radians = _launch_angle * Math.PI / 180;
			
			px = _initial_position.getX() + velo * Math.cos(radians)*deltaT;
			py = _initial_position.getY() + velo * Math.sin(radians)*deltaT+GRAVITY*((deltaT*deltaT)/2);

			return position(px / 1000, py / 1000).json();
		},
		"getInitialPosition": function(){ return _initial_position.json()} 
	}
}