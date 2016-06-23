$(function(){
	var ran = Math.floor(Math.random()*5+1);
	var $pic = $('#mypic').attr({
		'src':'img/P0'+ran+'.jpg'
	});
	$('#main').css({
		'height':$(window).height()+'px',
	});
	$('#mypic').mouseover(function(){
		$pic.attr('src','img/P06.png');
	})
	$('#mypic').mouseout(function(){
		$pic.attr('src','img/P0'+ran+'.jpg');
	})
})