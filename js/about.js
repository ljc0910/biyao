$(function(){
	$(".goodbox").load("index.html #bbox");
	$(".lb_foot").load("foot.html");
		var m=0;
	$(".lb_btn").children().on("click",function(){
		m = -$(this).index()*100;
		$(".lb_box").css({"transform": "translateY("+m+"%)"});
		$(".lb_btn").children().css({"background":"#ccc"});
		$(this).css({"background":"#666"})
	});
	
	var m=0;
	var scrollFunc=function(e){
   		 e=e || window.event;
         if(e.wheelDelta>0){	//判断鼠标上滚动下滚动（大于0向上）
         		$(".lb_btn").css({"display":"block"});
         		m=m+100;
         		if(m>0){m=0}
         		if(m===-275){m=-300}
         		var n = -m/100;
        		$(".lb_box").css({"transform": "translateY("+m+"%)"});
        		$(".lb_btn").children().css({"background":"#ccc"});
        		$(".lb_btn").children().eq(n).css({"background":"#666"});
        }else{
				m=m-100;
				if(m<-300){
					m=-375;
					$(".lb_btn").css({"display":"none"});
				}
				var n = -m/100;
				$(".lb_btn").children().css({"background":"#ccc"});
        		$(".lb_btn").children().eq(n).css({"background":"#666"});
       			$(".lb_box").css({"transform": "translateY("+m+"%)"});
        }
	}
	window.onmousewheel=scrollFunc;//滚轮事件
})