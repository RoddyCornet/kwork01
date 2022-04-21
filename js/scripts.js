


$('.menu__btn').on('click',function(){
	$('.exchange__inerr').toggleClass('exchange__inerr--active');
});







$('.reviews__list').slick({
	arrows: true,
	dots: true,
	nextArrow: '<img class="slick__arrow-left" src="../img/arrow.svg" alt="">',
	prevArrow: '<img  <img class="slick__arrow-right" src="../img/arrow.svg" alt="">',
 });
 $('.reviews__list').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	arrows: true,
	dots: true,
	nextArrow: '<img class="slick__arrow-left" src="../img/arrow.svg" alt="">',
	prevArrow: '<img  <img class="slick__arrow-right" src="../img/arrow.svg" alt="">',
	responsive: [
		{
		  breakpoint: 1100,
		  settings: {
			 slidesToShow: 3,
			 slidesToScroll: 1,
			 infinite: true
			 
		  }
		},
		{
		  breakpoint: 700,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	 ]
 });

$('.reviews__list').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
	  {
		 breakpoint: 1024,
		 settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		 }
	  },
	  {
		 breakpoint: 600,
		 settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		 }
	  },
	  {
		 breakpoint: 480,
		 settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		 }
	  }
	]
 });

(function ($) {
	$(function () {

		$('input, select').styler();

	});
})(jQuery);


$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});
