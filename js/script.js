$(function(){
	$("#blogTitle").mouseover(function(){
		$("#blogTitle h1 a").css("text-indent","30px");
	});
	$("#blogTitle").mouseout(function(){
		$("#blogTitle h1 a").css("text-indent","");
	});
})