
$(document).ready(function()
{
	$(".slide-wrapper").slick(
		{
			dots:false,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows:true,
  			asNavFor: '.slide-nav'
		});

	$('.slide-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slide-wrapper',
	  dots: false,
	  arrows:false,
	  centerMode: true,
	  focusOnSelect: true
	});

	$(window).resize(function()
	{
		$(".slide-wrapper .slick-slide").css("height",$(window).innerHeight()-100);
		$(".slide-nav .slick-slide").css("height",100);
	});
	$(window).trigger("resize");
				
});
