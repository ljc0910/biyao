$(function(){
	$("footer").load("foot.html");
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
	
	$(".f7").children("span").hover(function(){
		$(this).css({"background-position":"0 0"});
	},function(){
		$(this).css({"background-position":"0 -22px"});
	});
	
	var i=0;
	var j=0;
	$(".leader").on("click",function(){
		if(i%2==0&&j%2==0){
			$(".leader").css({"background-position":"0 -80px"});
			$(".xiaodi").css({"background-position":"0 -80px"});
		}else{
			$(".leader").css({"background-position":"-20px -80px"})			
			$(".xiaodi").css({"background-position":"-20px -80px"})
		}
		i++;
		j++;
	});
	$(".xiaodi").on("click",function(){
		if(i%2==0){
			$(".leader").css({"background-position":"0 -80px"});
			$(this).css({"background-position":"0 -80px"});
		}else{
			$(".leader").css({"background-position":"-20px -80px"})			
			$(this).css({"background-position":"-20px -80px"})
		}
		i++;
	});
})