
$(document).ready(function () {
	var birdList = $('.bird-animation__item');
	for (var i = 0; i < birdList.length; i++) {
		$(birdList[i]).fadeTo( 0, 0, "linear" );
	};
	// махи крыльями
	var birdFlies = setInterval(function () {
		birdList.fadeTo( 0, 0, "linear" );
		var v = 0;
		var z = 0;
		var dlitelnost = 300;

		for (var i = 0; i < birdList.length; i++) {

			v = (i)*dlitelnost;
			z = dlitelnost;

			$(birdList[i]).delay(v).fadeTo( 0, 1, "linear" ).delay(z).fadeTo( 0, 0, "linear" );

		console.log('включаем: '+v);
		console.log('выключаем: '+z);
		};

	}, 1000);
	// взлеты и падения
	var birdUpAndDown = setInterval(function() {
		$('.bird-animation').animate({
			top: '-20px'
		}, 1000, 'linear');
		$('.bird-animation').animate({
			top: '20px'
		}, 1600, 'linear');
		$('.bird-animation').animate({
			top: '0px'
		}, 1000, 'linear');
	}, 3600);

});