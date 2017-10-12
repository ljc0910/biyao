$(function(){
	$("header").load("head.html");
	$(".seachd").load("index.html #bbox");
	$("footer").load("foot.html");
	
	$(window).on("scroll",function(){
		var iT = document.body.scrollTop||document.documentElement.scrollTop;
		if(iT>550){
			$(".header-fixed").css({"display":"none"});		//防止原本的模块出现
			$(".seach_r").css({"position":"relative","right":0,"top":0});
		}
		else{
			$(".header-fixed").css({"display":"none"});
			$(".seach_r").css({"position":"relative","right":0,"top":0});
		}
	});
	
	$(".cont-list").children().on("click",function(){
		$(".cont-list").children().css({"border":"1px solid #ccc"});//重置默认边框为灰色
		$(this).css({"border":"1px solid #523669"});
		$(".left-cont").html($(this).html());//点解查看大图片
	});
	
	$(".color").children().has("img").on("click",function(){
		$(".color").children().has("img").css({"border":"1px solid #ccc"});
		$(this).css({"border":"1px solid #523669"});
		$(this).siblings().children("em").css({"display":"none"});
		$(this).children().eq(1).css({"display":"block"});
		$(".left-cont").html($(this).html());
	});
	
	$(".size-btn").children().on("click",function(){
		$(".size-btn").children().css({"border":"1px solid #ccc"});
		$(this).css({"border":"1px solid #523669"});
		$(this).siblings().children("em").css({"display":"none"});
		$(this).children().css({"display":"block"});
	})
	
	$("#size-btn").on("click",function(){
		$(".cover").css({"display":"block"})
		$(".move").css({"display":"block"})
	})
	$(".hd_close").on("click",function(){
		$(".cover").css({"display":"none"})
		$(".move").css({"display":"none"})
	})
	
	$(".sub").on("click",function(){//修改购买物品数量
		var n=$(this).siblings(".result").html();
		n--;
		if(n<1){
			n=1;
		}
		$(this).siblings(".result").html(n);
	});
	$(".add").on("click",function(){
		var n=$(this).siblings(".result").html();
		n++;
		$(this).siblings(".result").html(n);
	});
	
	$(window).on("scroll",function(){	//判断滚动条位置，修改固定定位
		var iT = document.body.scrollTop||document.documentElement.scrollTop;
		if(iT>770){
			$(".title").css({"position":"fixed","left":"50%","margin-left":"-540px","top":-40,"z-index":2});
			$(".shopping").css({"display":"block"});
		}else{
			$(".title").css({"position":"relative","top":"1px"});
			$(".shopping").css({"display":"none"})
		}
	})	
	
	$(".goods-ifom").css({"background":"#fff","border-bottom":"3px solid #523669"});	//修改默认初始样式
	$(".goods-ifom").on("click",function(){		
		$(this).siblings().not(".shopping").css({"background":"#EEECEF","border-bottom":"1px solid #ccc"})	//重置样式
		$(this).css({"background":"#fff","border-bottom":"3px solid #523669"})	//修改当前样式
		$(".appr-detail").css({"display":"none"})	//选项卡修改
		$(".ifom-detail").css({"display":"block"})
		var body = $('html,body');
		body.animate({scrollTop:720});//设置滚动条位置
	});
	$(".goods-apparise").on("click",function(){
		$(this).siblings().not(".shopping").css({"background":"#EEECEF","border-bottom":"1px solid #ccc"})
		$(this).css({"background":"#fff","border-bottom":"3px solid #523669"})
		$(".ifom-detail").css({"display":"none"})
		$(".appr-detail").css({"display":"block"})
		var body = $('html,body');
		body.animate({scrollTop:720});
	});
	
	
	$("#all").on("click",function(){
		$(this).children("span").css({"background-position":"-20px 26px"})//背景图模拟选中
		$("#only-pic").children("span").css({"background-position":"20px 26px"})
		$(".picture").css({"display":"none"})//选项卡
		$(".appr").css({"display":"block"})
	});
	$("#only-pic").on("click",function(){
		$(this).children("span").css({"background-position":"-20px 26px"})
		$("#all").children("span").css({"background-position":"20px 26px"})
		$(".appr").css({"display":"none"})
		$(".picture").css({"display":"block"})
	});
});