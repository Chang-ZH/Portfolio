
$(function(){

	$("article").on("inview", function(){
		$(this).find("div").animate({
			opacity: 1,
			top: 0
		}, 800, "swing");	

		return false;
	});

});


