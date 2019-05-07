
$(document).ready(function () {
	var birdList = $('.bird-animation__item');
	var birdFlies = setInterval(function () {
			var v = 0;
			var z = 0;
			var A = 0;
			var nextIter = 0;
		for (var i = 0; i < birdList.length; i++) {
			//birdList.css('opacity', '0');
			console.log('начало '+nextIter, z);
			if (nextIter == 0) {
				v = 0;
				z = v + 600;
			} else if (nextIter != 0) {
				v = nextIter;
				z = nextIter + 600;
				console.log('конец '+nextIter, z);
			};

			$(birdList[i]).delay(v).fadeIn(100).delay(z).fadeOut(100);
			nextIter = v + z;
			
		};
		//birdList.removeClass('bird-flies');
	}, 2400);
});