$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu__midl,.menu__midl_black').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.menu__burger:before').click(function (event) {
		$('.menu__burger,.menu__midl,.menu__midl_black').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__burger:after').click(function (event) {
		$('.menu__burger,.menu__midl,.menu__midl_black').toggleClass('active');
		$('body').toggleClass('lock');
	});
});