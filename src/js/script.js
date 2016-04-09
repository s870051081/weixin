var $ = require('./jquery.js');
require('./l-by-l.min.js');
require('../swiper/swiper-3.3.1.min.js');
var swiperAnimateCache = require('../swiper/swiper.animate1.0.2.min.js').swiperAnimateCache;
var swiperAnimate = require('../swiper/swiper.animate1.0.2.min.js').swiperAnimate;
var tpl =require('./tpl/index.string');

jQuery(document).ready(function($){
		$('body').prepend(tpl);
		var mySwiper = new Swiper ('.swiper-container', {
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			    if($('html').hasClass('touch') ) {
						    // Do Nothing 
				} else {

					$(".four p").lbyl({
						 content: "我们的青春里没有徐太宇,也没有欧阳非凡，青春里最喜欢的是科比、周杰伦、张国荣、韩寒、周星驰、迈克尔杰克逊。。。如今，他们和我们的青春一样，渐渐淡去，可心里却很想对他们说一句，谢谢你路过我的青春。。。",
						 speed: 500, //time between each new letter being added
						 type: 'fade', // 'show' or 'fade'
						 fadeSpeed: 500, // Only relevant when the 'type' is set to 'fade'
					})
				}
		    }, 
			    onSlideChangeEnd: function(swiper){ 
			    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			} ,


			direction: 'vertical',
			paginationClickable: true,
			loop: true,

			// 如果需要分页器
			pagination: '.swiper-pagination',
			effect : 'flip',
			flip: {
				slideShadows : true,
				limitRotation : true,
			} 

			

		});
		
		$("#music").click(function(){
			if($("#music").css("animationPlayState")=="running"){
				$(this).css({animationPlayState:'paused'});
				$('#imgs').attr("src","img/audio2.png");
				$("#audio")[0].pause();
			}else{
				console.log(111);
				$(this).css({animationPlayState:'running'});
				$('#imgs').attr("src","img/audio1.png");
				$("#audio")[0].play();
			}
			
			
		});
		
		$.ajax({
			type:"get",
			url:"/interface/getList.do",
			success:function(data){
				
				var arr = data.data;
				var str = '';
				$.each(arr, function(i,d) {
					str += '<img class="ani" swiper-animate-effect="'+ arr[i].effect +'" swiper-animate-duration="'+ d.duration+'" swiper-animate-delay="'+ d.delay +'" src="'+ d.src +'" height="7%" width="30%" alt=""/>';
				});
				//console.log(str)
				$("#one").html(str);
				
			}
			
		});
	
		
		

	});      