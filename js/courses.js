$(document).ready(function () {
    $(".course-btn").click(function () {
        if (!$(this).next().is(':visible')) {
            $('.course-toggle').hide(1000);
            $(this).next().toggle(1000,function() {
                $(window).scrollTop($(this).prev().offset().top);
                //console.log($(this).next().offset().top);
              });
        } else {
            $('.course-toggle').hide(1000);
        }
    });
});