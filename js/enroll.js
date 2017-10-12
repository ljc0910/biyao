$(function(){

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
				$(this).siblings().last().html("手机号码格式错误");
			}			
		}
	});
	
	$("input").eq(1).on("blur",function(){
		if($(this).val()===""){
			$(this).css({"border":"1px solid #F49F26"});
			$(this).siblings().last().html("请输入短信验证码");
		}else{
			var reg =/^[0-9]{6}$/;
			if($(this).val().match(reg)){
				$(this).css({"border":"1px solid #e8e8e8"});
				$(this).siblings().last().html("");
			}else{
				$(this).css({"border":"1px solid #F49F26"});
				$(this).siblings().last().html("手机验证码格式错误");
			}			
		}
	});
	
	$("input").eq(2).on("blur",function(){
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
				$(this).siblings().last().html("请输入6-32位字符，需字母数字符号两种以上组合");
			}			
		}
	});
	
	$("input").eq(3).on("blur",function(){
		if($(this).val()===""){
			$(this).css({"border":"1px solid #F49F26"});
			$(this).siblings().last().html("请再次输入登录密码");
		}else{
			if($(this).val()==$(this).parent().prev().children().first().val()){//检测两次输入密码是否相同
				$(this).css({"border":"1px solid #e8e8e8"});
				$(this).siblings().last().html("");
			}else{
				$(this).css({"border":"1px solid #F49F26"});
				$(this).siblings().last().html("两次密码不一致，请重新输入");
			}			
		}
	});
	
	var n=0;
	$("#choose").on("click",function(){
		n++;
		if(n%2===0){
			$(this).children().css({"background-position":"39px -80px"});			
		}else{
			$(this).children().css({"background-position":"20px -80px"});			
		}
	});
	
	$("#foot").load("foot.html")
})