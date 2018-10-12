
$(function(){

	/* ball button transform */
	$(".ball_button").on("inview", function(){
		$(this).css("transform", "scale(1, 1)");
	});

	/* scroll to the anchor */
	$(".scroll").click(function(){
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		
		// wait for transform
		// scale(0, 0) --> matrix(0, 0, 0, 0, 0, 0)
		if(target.parent().find(".ball_button").css("transform") == "matrix(0, 0, 0, 0, 0, 0)"){
			$("body,html").animate({
				scrollTop: position - 180
			}, speed, "swing");	
		}else{
			$("body,html").animate({
				scrollTop: position - 80
			}, speed, "swing");	
		};
	});

	/* current position hightlight */
	$(window).scroll(function(){
		var cur_pos = $(this).scrollTop();
		
		var now_section = undefined;
		$("section").each(function(){
			var trigger = $(this).offset().top - 300;

			// trigger > 0, to skip 1st section(cover)
			if(cur_pos > trigger && trigger > 0){
				now_section = this;
			}
		});

		if(now_section != undefined){
			$("nav a").removeClass("menu-active"); // init
			var hightlight = $("[href='#" + $(now_section).attr("id") + "_anchor']");
			hightlight.addClass("menu-active");
		}else{
			$("nav a").removeClass("menu-active");
		}
	});
	
	/* go top */
	$("#gotop").click(function(){
        $("html,body").animate({
			scrollTop: 0
		}, 400, "swing");
    });
     
	// track the window, show up after 700px
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 100){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').stop().fadeOut();
        }
    });

	return false;

});

