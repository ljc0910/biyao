$(function(){
	$("#header").load("enroll.html header");
	$("input").eq(0).on("blur",function(){
		if($(this).val()===""){//检测手机号码是否为空
			$(this).css({"border":"1px solid #F49F26"});
			$(this).siblings().last().html("请输入手机号");
		}else{
			var reg =/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
			if($(this).val().match(reg)){//检测手机号码是否正确
				$(this).css({"border":"1px solid #e8e8e8"});
				$(this).siblings().last().html("");
			}else{
				$(this).css({"border":"1px solid #F49F26"});
				$(this).siblings().last().html("账号格式错误，请重新输入");
			}			
		}
	});
	
	$("input").eq(1).on("blur",function(){
		if($(this).val()===""){
			$(this).css({"border":"1px solid #F49F26"});
			$(this).siblings().last().html("请输入登录密码");
		}else{
			var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
			if($(this).val().match(reg)){
				$(this).css({"border":"1px solid #e8e8e8"});
				$(this).siblings().last().html("");
			}else{
				$(this).css({"border":"1px solid #F49F26"});
				$(this).siblings().last().html("登录密码格式错误");
			}			
		}
	});
	$("#foot").load("foot.html");
	
	var n=0;
	$("#choose").on("click",function(){
		n++;
		if(n%2===0){
			$(this).children().css({"background-position":"0px -80px"});
			$(this).children().last().html("下次自动登录");
		}else{
			$(this).children().css({"background-position":"40px -80px"});	
			$(this).children().last().html("请勿在公用电脑上勾选此选项");
		}
	});
});