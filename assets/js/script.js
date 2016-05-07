$(document).ready(function(){

    $(".jumper").click(function() {
        $('html, body').animate({
            scrollTop: $("href").offset().top
        }, 2000);
    });


	$('.project1').mouseenter(function(){
		$(this).stop().fadeTo('slow',0.4);
	}).mouseleave(function(){
		$(this).stop().fadeTo('slow',1);
	});

    $('.project2').mouseenter(function(){
		$(this).stop().fadeTo('slow',0.4);
	}).mouseleave(function(){
		$(this).stop().fadeTo('slow',1);
	});

    $('.project3').mouseenter(function(){
		$(this).stop().fadeTo('slow',0.4);
	}).mouseleave(function(){
		$(this).stop().fadeTo('slow',1);
	});



    $(".project1").click(function(){
             window.location = "https://github.com/foodstream";
    });

    $(".project2").click(function(){
             window.location = "https://github.com/mike-crane/memory-layout";
    });

    $(".project3").click(function(){
             window.location = "https://github.com/mike-crane/responsive-icon-grid";
    });

});
