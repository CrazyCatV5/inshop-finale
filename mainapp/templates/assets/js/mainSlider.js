$(document).ready(function() {
	let wid = $('.box').css('width');
	wid = parseInt(wid);
	if (wid >= 750) {
		$('.slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: true,
			appendDots: $('.main__popular__dots'),
		});
	} else {
		$('.slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			appendDots: $('.main__popular__dots'),
		});
	}
});
$('.main__popular__control_prev').on('click', function() {
	$('.slider').slick('slickPrev');
});
$('.main__popular__control_next').on('click', function() {
	$('.slider').slick('slickNext');
});

$(document).ready(function() {
	let wid = $('.box').css('width');
	wid = parseInt(wid);
	if (wid >= 750) {
		$('.slider_news').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: true,
			appendDots: $('.main__news__dots'),
		});
	} else {
		$('.slider_news').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			appendDots: $('.main__news__dots'),
		});
	}
});
$('.main__news__control_prev').on('click', function() {
	$('.slider_news').slick('slickPrev');
});
$('.main__news__control_next').on('click', function() {
	$('.slider_news').slick('slickNext');
});