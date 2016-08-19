$(document).ready(function() {

    /*========= LANDING ANIMATION =========*/
    // var i = 1;
    // var go = setInterval(function() {
    //
    //     $('#slide-' + i).show('slide', {
    //         direction: 'left'
    //     }, 100);
    //
    //     i++;
    //
    // }, 1000)


    /*========= HEADER HIDE-ON-SCROLL =========*/

    $(function() {
        $(window).scroll(function() {
            var winTop = $(window).scrollTop();
            if (winTop >= 30) {
                $("body").addClass("sticky-header");
            } else {
                $("body").removeClass("sticky-header");
            }
        });
    });


    /*=============== NAV SMOOTH SCROLL ===============*/

    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });


    /*========== PROJECT HOVER EFFECT ==========*/

    $(".hover").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );

    /*========= PROJECT PAGE REDIRECTS =========*/

    $(".left-box").click(function() {
        window.location = "https://mike-crane.github.io/TIY-Chessboard";
    });

    $(".center-box").click(function() {
        window.location = "https://www.foodstre.am";
    });


    $(".right-box").click(function() {
        window.location = "https://mike-crane.github.io/responsive-icon-grid/";
    });

});
