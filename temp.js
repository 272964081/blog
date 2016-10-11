$(function(){
	my();
})
function my(){
	$(".nav li a").each(function(x){
		x.attr("target","_blank");
	});
}