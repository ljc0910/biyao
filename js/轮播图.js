$(function(){
	$('.img').children().css({"opacity":"1"});
	$('.img').children().eq(0).css({"opacity":"0"});
	
	function move(m){
		m=m+1;
		$('.img').children().stop(true);
		$('.img').children().eq(m).siblings().animate({"opacity":"0"});
		$('.img').children().eq(m).animate({"opacity":"1"});
		$('.btn').children().removeClass("a");
		$('.btn').children().eq(m).addClass("a");
	}
	
	$('.btn').children().on('mouseenter',function(){
		var m = $(this).index();
			move(m);
	});
	
	$('.lb_r').hover(function(){$('time').css({"display":"block"},clearInterval(iTemper))},
		function(){$('time').css({"display":"none"}), iTemper = setInterval(function(){
		var m = $('.a').index()+1;
		if(m>=6){m=0}
		move(m);
	},3000);});
	
	$('.btn_r').on('click',function(){
		var m = $('.a').index()+1;
		if(m>=6){m=0}
		move(m);
	});
	$('.btn_l').on('click',function(){
		var m = $('.a').index()-1;
		if(m<0){m=5}
		move(m);
	});
	
	var iTemper = setInterval(function(){
		var m = $('.a').index()+1;
		if(m>=6){m=0}
		move(m);
	},3000);
});