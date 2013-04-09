var angle = 0;
var up = true;

var level = level();
var t = throwable("money", 10);
var moneyInitialPosition;
var myInitialPosition;

function rotateCannon(){
		$("#cannon").rotate(angle+"deg");
		if (up) angle -= 1;
		else angle += 1;
		if (angle === -70) up = false;
		if (angle === 0) up = true;
}

function defineHit(currentPosition, nextPosition){
	var targetBase = {"x": 1135, "y": 580};
	var targetTop = {"x": 1135, "y": 508};

 	det = (targetBase.x - targetTop.x) * (nextPosition.y - currentPosition.y)  -  (targetBase.y - targetTop.y) * (nextPosition.x - currentPosition.x);

	if (det == 0.0)
		return false ; // não há intersecção
	return true; // há intersecção
}

$(document).ready(function(){	
	moneyInitialPosition = $(".money").offset();
	myInitialPosition = $(".me").offset();
	$(".btn").click(function(){
		clearInterval(loop);
		var date = new Date();
		t.setInitialPosition(position(moneyInitialPosition.left, moneyInitialPosition.top));
		t.setLaunch(Math.abs(angle-10), date.getTime());
		var loop_fly = setInterval(function() {
			var date = new Date();
			var currentPosition = t.getPosition(date.getTime());
			if (!isPlaying(currentPosition)) {
				$(".feedback").show()
				clearInterval(loop_fly);
			}
			var moneyInitialPosition = t.getInitialPosition(); 
			
			$(".money").css({top: moneyInitialPosition['y'] - Math.round(currentPosition['y']),
			 left: moneyInitialPosition['x'] + Math.round(currentPosition['x'])});
			
			var nextPosition = t.getPosition(date.getTime()+0001);
			if (!defineHit(currentPosition, nextPosition)){
				alert("Você ganhou :)");
				clearInterval(loop_fly);
			}
		}, 1);
	}
);
	function isPlaying(position){
		if (position['y'] < -75) return false;
		if (position['x'] > 1180) return false;
		return true;
	}

	var loop = setInterval(rotateCannon, 15);
})