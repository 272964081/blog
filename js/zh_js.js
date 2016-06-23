$(function(){
	$("#user-info").mouseover(function(){
		$(".contener").show();
	});
	$(".contener").mouseleave(function(){
		$(this).hide();
	});

})