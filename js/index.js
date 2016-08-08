
$(function(){
	//1.更新系统时间
	upDateTimes();
	setInterval('upDateTimes()',1000);
	//2.添加点击事件
	var $box = $(".pic-box");
	var $boxUl = $box.find("ul");
	var $btnGroup =$box.find(".btn-group a");
	$btnGroup.each(function(i,e){
		var oLeft = -640*i+'px';
		$(this).click(function(){
			$btnGroup.removeClass("active");
			$boxUl.css("left",oLeft);
			$(this).addClass("active");
			if(int){
				removeInterval(int);
				picRoll($boxUl,3000);
			}
		});
	});
	//3.图片自动转换
	picRoll($boxUl,5000);
	
});

//调用系统时间
function upDateTimes(){
	var currentDate = new Date();
	// console.log(currentDate);
	var year = currentDate.getFullYear();
	var month = number(currentDate.getMonth()+1);
	var day = number(currentDate.getDate());//日
	var hours = number(currentDate.getHours());
	var minutes=number(currentDate.getMinutes());
	var sec = number(currentDate.getSeconds());

	var $html = year+'.'+month+'.'+day+'&nbsp;'+hours+':'+minutes+':'+sec;
	$(".header-time").html("").html($html);
}
//个位数补零操作
function number(num){
	return (num<10)?('0'+num):num;
}

//图片自动轮播
var int;
function picRoll(ele,delay){
	var $box = ele;
	var $btng =$(".pic-box").find(".btn-group a");
	 int= setInterval(function(){
	 	var current = $box.css("left");
	 	var mleft ;
	 	if (current==='0px') {
	 		mleft='-640px';
	 		$(".text-box a").html("<h2>电商网站实操链接</h2>").attr("href","ds/index.html");
	 		$btng.removeClass('active').eq(1).addClass('active');
	 	}else if(current==='-640px'){
	 		mleft='-1280px';
	 		$(".text-box a").html("<h2>部分链接</h2>").attr("href","ds/product.html");
	 		$btng.removeClass('active').eq(2).addClass('active');
	 	}else if(current==='-1280px'){
	 		mleft='0px';
	 		$(".text-box a").html("<h2>某次练习</h2>").attr("href","index-old.html");
	 		$btng.removeClass('active').eq(0).addClass('active');

	 	}
	 	$box.css("left",mleft);
		
	},delay);
}