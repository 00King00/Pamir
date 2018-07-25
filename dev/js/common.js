$(function(){
	//products Slider

	var top = $('.main-menu').offset().top;

	//products Slider

		var productslider=$('#productslider').lightSlider({
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
		var productslider2=$('#productslider2').lightSlider({
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
	
	//Main Slider (promo) setting
		var promoslider_mobile=$('#promoslider-mobile').lightSlider({
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
		var instaslider=$('#instaslider').lightSlider({
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
	$("#promoslider img").on('load', function(){

  		setTimeout(SameHeight, 1000);

 	});

	$(window).resize(function(){
		setTimeout(SameHeight, 500);
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


	//show/hide mobile footer list
	$(".footer__title").click(function(){
		$(this).siblings("ul").toggleClass("active");
	});
	$('.sorter a').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings().toggleClass('active');
		console.log(1);

		})
	// hide  moodal when click at another place
	$(document).mouseup(function (e){
		var div = $(".modal"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			if($('.fixed-overlay').hasClass('active')){
				$('.fixed-overlay').removeClass('active')
			}
		}
	});

	//open modal window
	$(".callback").click(function(){
		$(".fixed-overlay.callback").addClass('active');
		
	});
	$(".sign-in").click(function(){
		$(".fixed-overlay.sing-in").addClass('active');
		
	});

	//close modal window
	$(".fixed-overlay__modal .icon_remove-item").click(function(){
		$(this).parent().parent().parent().removeClass('active');
		console.log($(this).parent().parent().parent())
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(){
		$(".fixed-overlay").removeClass('active');
	});

	// Set menu position:fixed
	function fixMenuBar(){
		var scrolTop = $(window).scrollTop();
		var width = $(window).width();
		console.log(scrolTop);
		console.log(top);
			if(scrolTop>=top){
				$(".main-menu").addClass("fixed");
				$('body').addClass("scroll_padding-top")
			} else {
				$(".main-menu").removeClass("fixed");
				$('body').removeClass("scroll_padding-top")

			}
		}
	$(window).scroll(function(){
		fixMenuBar();
	});
	
	//Set style scrol Bar
	//$('#scrollme').leftScrollbar();
	

});