$(function(){
	//products Slider 
		var productslider=$('#productslider').lightSlider({
		galleryMargin: 25,
		item: 4,
		slideMove:1,
		pager: false,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
		responsive:[
				{
					breakpoint: 900,
					settings:
						{
							item:3,
							slideMove:1,
						}
				},
				{
					breakpoint: 500,
					settings:
						{
							item:1.5,
							slideMove:1,
						}
				}
				
			],
	});
		//products Slider2
		var productslider=$('#productslider2').lightSlider({
		galleryMargin: 25,
		item: 4,
		slideMove:1,
		pager: false,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
		responsive:[
				{
					breakpoint: 900,
					settings:
						{
							item:3,
							slideMove:1,
						}
				},
				{
					breakpoint: 500,
					settings:
						{
							item:1.5,
							slideMove:1,
						}
				}
				
			],
	});

	//Main Slider (promo) setting
		var promoslider=$('#promoslider').lightSlider({
		galleryMargin: 25,
		item: 1,
		slideMove:1,
		pager: true,
		controls: true,
		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////
		speed: 400, //ms'
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 10000,
	});
	
	function SameHeight() {
		var browserMinWidth = $(window).width()
			if (browserMinWidth > 600) {
				$('.sale').css('height', $('#promoslider').height());
			}
	}
	$(window).resize(function(){
		SameHeight();
	});
});