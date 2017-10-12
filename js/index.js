$(function(){
	$(document).on("focus","input",function(){
		$("#seach_content").css({"display":"block"});
		$("#seach_content").children().eq(0).children().on("click",function(){
			var vl = $(this).html()
			$(".seach_r").children().eq(1).val(vl);				//功能未实现
		})
	});
	$(document).on("blur","input",function(){
		$("#seach_content").css({"display":"none"});
	});

	$(".choose-lb").children().children().css({"width":82});	//
	$(".choose-lb").children().children().eq(0).css({"width":615});	//定义初始样式
	$(".choose-lb").children().children().children().eq(1).css({"opacity":0});	//
	$(".choose-lb").children().children().on("mouseenter",function(){
		$(".choose-lb").children().children().stop(true);
		$(this).siblings().animate({"width":82},300);	
		$(this).animate({"width":615},300);	

		$(this).siblings().children("div").stop(true);
		$(this).siblings().children("div").animate({"opacity":0.4},300);//半透明黑色盒子
		$(this).children("div").animate({"opacity":0},300);
	});
	
	$(window).on("scroll",function(){
		var iT = document.body.scrollTop||document.documentElement.scrollTop;
		if(iT>450){
			$(".header-fixed").css({"display":"block"});
			$(".seach_r").css({"position":"fixed","right":220,"top":-20});
			$(".fixed_l").hover(function(){
				$(this).children().css({"background":"url(img/Up.png)"});
				$(".lb_l").css({"position":"fixed","left":220,"top":60,"z-index":999})
				$(".lb_l").on("mouseleave",function(){
					$(".lb_l").css({"position":""});
				})
			},function(){
				$(this).children().css({"background":"url(img/Down.png)"});						
			});
			
		}
		else{
			$(".header-fixed").css({"display":"none"});
			$(".seach_r").css({"position":"relative","right":0,"top":0});
			$(".lb_l").css({"position":""});
		}
		
		if(iT<10){
			$('.df2').css({"display":"none"})
		}else{
			$('.df2').css({"display":"block"})
		}
	});
	

	
	$(document).on("mouseenter",".df1",function(){//解决load只能加载静态页面的方法；
		$(".df1").css({"background":"url(img/rightBar-codeActive.png)"});
		$(".df1-child").css({"display":"flex"});
	});
	$(document).on("mouseleave",".df1",function(){
		$(".df1").css({"background":"url(img/rightBar-code.png)"});
		$(".df1-child").css({"display":"none"});
	});
	

	$(document).on("mouseenter",".df2",function(){
		$(".df2").css({"background":"url(img/rightBar-topActive.png)"});
	});
	$(document).on("mouseleave",".df2",function(){
		$(".df2").css({"background":"url(img/rightBar-top.png)"});
	});

	$(document).on("click",".df2",function(){
		var body = $('html,body');
		body.animate({scrollTop:0});
	});
	
	$("#head").load("head.html"); 
	$("#foot").load("foot.html"); 
});
