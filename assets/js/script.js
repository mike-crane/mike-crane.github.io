$(document).ready(function() {

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
            }, 1000);
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

    $(".work-box.cxd1").click(function() {
        window.location = "https://www.carchexdeals.com/";
    });

    $(".work-box.3sv").click(function() {
        window.location = "http://3s.ventures";
    });

    $(".work-box.gd").click(function() {
        window.location = "https://glassdoctor.com/content/repair-broken-glass-window";
    });

    $(".work-box.cxd2").click(function() {
        window.location = "https://www.carchexdeals.com/FB-AD/protection_plan_quiz-g/index.html";
    });

    $(".work-box.cx").click(function() {
        window.location = "https://www.carchex.com/content/used-car-extended-warranty";
    });

    $(".work-box.cxd3").click(function() {
        window.location = "https://www.carchexdeals.com/branded-lp/index.html";
    });

});
