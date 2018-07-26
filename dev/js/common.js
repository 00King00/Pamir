$(function(){
	//products Slider

	var top = $('.main-menu').offset().top;
	//products Slider

		var productslider=$('#recently').lightSlider({
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
	$("#promoslider img").first().on('load', function(){

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
		}else{
			$("#content2").addClass('active');
			$("#content1").removeClass('active')
		}
	})
	$(".callback__modal-window .form__tabs input").click(function(){
		var select = $(this).prop("id");
		if(select == 'tab_1'){
			$("#content_1").addClass('active');
			$("#content_2").removeClass('active')
		}else{
			$("#content_2").addClass('active');
			$("#content_1").removeClass('active')
		}
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

		})
	// hide  moodal when click at another place
	$(document).mouseup(function (e){
		var div = $(".modal");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			if($('.fixed-overlay').hasClass('active')){
				$('.fixed-overlay').removeClass('active')
			}
		}

	
	});
		$('body').mouseup(function (e){
			var div_1 = $(".callback__modal-window");
			if (!div_1.is(e.target) && div_1.has(e.target).length === 0){
				if($('.callback__modal-window').hasClass('active')){
					$('.callback__modal-window').removeClass('active')
				}
			}
		});

	//open modal window
	$(".header-middle .callback").click(function(){
		$(".callback__modal-window").addClass('active');
		//e.stopPropagation();
		
	});
	$(".sign-in").click(function(){
		$(".fixed-overlay.sing-in").addClass('active');
		
	});
	$(".city").click(function(){
		$(".fixed-overlay.region-city").addClass('active');
		
	});


	//close modal window

	$(".fixed-overlay__modal .icon_remove-item").click(function(e){
		$(this).parent().parent().parent().removeClass('active');
		e.stopPropagation();
		
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(e){
		$(".fixed-overlay").removeClass('active');
		e.stopPropagation();
	});
	$(".callback__modal-window input[type='submit']").click(function(e){
		$(".callback__modal-window").removeClass('active');
		e.stopPropagation();
	});
	
	//Search-form on mobile device
	$('.search-mobile').click(function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		$(".search-form").animate(
			{height: 'toggle'},
			{duration:200},
		);
	})

	//show-hide menu
		$('.bars').click(function(){
			$(".main-menu-mobile").addClass('main-menu-mobile_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
		$('.close-btn').click(function(){
			$(".main-menu-mobile").removeClass('main-menu-mobile_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
	// end show-hide menu

	// Set menu position:fixed
	function fixMenuBar(){
		var scrolTop = $(window).scrollTop();
		var width = $(window).width();
			if(width>800){
				if(scrolTop>=top){
					$(".main-menu").addClass("fixed");
					$('body').addClass("scroll_padding-top")
				} else {
					$(".main-menu").removeClass("fixed");
					$('body').removeClass("scroll_padding-top")

				}
			}
	}
	$(window).scroll(function(){
		
		fixMenuBar();
	});
	
	//Set style scrol Bar

	//$('#scrollme').leftScrollbar();
		$('.main-menu>.wrapper>ul>li').mouseover(function(event){
		var moveleft=$(this).offset().left - $('.main-menu li:first-child').offset().left
		event.preventDefault();
		console.log(moveleft)
		$(this).toggleClass('active');
		$('.submenu-block').css("left", -moveleft)
		})
		
	

});