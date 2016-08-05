
$(function(){
	//1.更新系统时间
	var city = returnCitySN.cname; //获取城市
	$(".header-city").html(city);
	upDateTimes();
	setInterval('upDateTimes()',1000);
	
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