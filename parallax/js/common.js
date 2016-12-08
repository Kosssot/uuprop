$(window).scroll(function(){

	var st = $(this).scrollTop();

	$(".heder_text").css({
		"transform" : "translate(0%, " + st +"%"
	});

	$(".sect_2 img").css({
		"transform" : "translate(0%, " + st / 20+"%"
	});

	$(".sect_3 img").css({
		"transform" : "translate(0%, " + st / 30+"%"
	});

	/*console.log(st);*/

});