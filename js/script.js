$(function(){
	var ran = Math.floor(Math.random()*5+1);
	var $pic = $('#mypic').attr({
		'src':'img/P0'+ran+'.jpg'
	});
	$('#main').css({
		'height':$(window).height()-$('.title').eq(0).innerHeight()*2+'px',
	});
	$('#mypic').mouseover(function(){
		$pic.attr('src','img/P06.png');
		$('body').css('background-color','#000');
	})
	$('#mypic').mouseout(function(){
		$pic.attr('src','img/P0'+ran+'.jpg');
		$('body').css('background-color','');
	})
})