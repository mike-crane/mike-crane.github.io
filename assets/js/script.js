$(document).ready(function () {

/*=============== NAV SCROLL ===============*/

/* Code modified from smooth-scrolling example obtained from https://css-tricks.com/snippets/jquery/smooth-scrolling*/
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });


/*========== PROJECT HOVER EFFECT ==========*/

    $('.project1').mouseenter(function () {
        $(this).stop().fadeTo('slow', 0.4);
    }).mouseleave(function () {
        $(this).stop().fadeTo('slow', 1);
    });

    $('.project2').mouseenter(function () {
        $(this).stop().fadeTo('slow', 0.4);
    }).mouseleave(function () {
        $(this).stop().fadeTo('slow', 1);
    });

    $('.project3').mouseenter(function () {
        $(this).stop().fadeTo('slow', 0.4);
    }).mouseleave(function () {
        $(this).stop().fadeTo('slow', 1);
    });


    
/*========= PROJECT PAGE REDIRECTS =========*/

    $(".project1").click(function () {
        window.location = "https://github.com/foodstream";
    });

    $(".project2").click(function () {
        window.location = "https://github.com/mike-crane/memory-layout";
    });

    $(".project3").click(function () {
        window.location = "https://github.com/mike-crane/responsive-icon-grid";
    });

            
});
    