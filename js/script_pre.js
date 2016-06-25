$(function(){
	setCurrentTime();
	setInterval(setCurrentTime,1000);
})
function setCurrentTime(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDay();
	var hours = date.getHours();
	hours = (hours<10)?('0'+hours):hours;
	var Minutes = date.getMinutes();
	Minutes = (Minutes<10)?('0'+Minutes):Minutes;
	var seconds = date.getSeconds();
	seconds = (seconds<10)?('0'+seconds):seconds;
		// console.log(date);
		$('.info_date').eq(0).text(year+'年'+month+'月'+day+'日 '+hours+':'+Minutes+':'+seconds);
	}