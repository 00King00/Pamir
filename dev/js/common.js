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
		item: 1,
		slideMove:1,
		pager: false,
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
		responsive:[
				{
					breakpoint: 600,
					settings:
						{
							controls: false,
						}
				},
				
			],
	});
	
	//Instagram Slider (promo) setting
		var promoslider=$('#instaslider').lightSlider({
		galleryMargin: 25,
		item: 1,
		slideMove:1,
		pager: false,
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
			if (browserMinWidth > 800) {
				$('.sale').css('height', $('#promoslider').height());
			}
			else{
				$('.sale').css('height', 'auto');
			}
	}
	$(window).resize(function(){
		SameHeight();
	});
	
	//for tabs form
	$(".form__tabs input").click(function(){
		var select = $(this).prop("id");
		if(select == 'tab1'){
			$("#content1").addClass('active');
			$("#content2").removeClass('active')
			console.log(select == tab1, 1);
			
		}else{
			$("#content2").addClass('active');
			$("#content1").removeClass('active')
			console.log(select == tab1);
		}
		console.log(select == tab1);
	})
	
	// input-mask
	$('input[type="tel"]').inputmask('+7 (999) 999 - 99 - 99');
	// end input-mask
		SameHeight()
	//show/hide mobile footer list
	$(".footer__title").click(function(){
		$(this).siblings("ul").toggleClass("active");
	});
});