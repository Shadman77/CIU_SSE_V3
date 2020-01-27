$(document).ready(function () {
    $(".sidebar-submenu").click(function () {
        /*alert($(this).attr("data-toggle-target"))*/
        $('.sidebar-submenu-active').removeClass('sidebar-submenu-active')
        $(this).addClass("sidebar-submenu-active");
        //$('.sidebar-submenu-toggle').hide(1000)
        //$('#' + $(this).attr("data-toggle-target")).show(1000);
        var id = '#' + $(this).attr("data-toggle-target")
        $('.sidebar-submenu-toggle').fadeOut(800);
        setTimeout(function(){
            //console.log(id);
            $(id).fadeIn(800);
        }, 800);
        /*$(this).next().toggle(1000);*/
    });
});