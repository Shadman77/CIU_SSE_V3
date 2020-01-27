/**Marquee */
/**All the class need is to be a block element and overflow = hidden */
$('.latest-news-marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: false,
    pauseOnHover: true,
    allowCss3Support: true
});

/**Dropdown on hover*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

/**Scroll Up Button*/
var scroll_up_btn = $('#scroll-up-button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        scroll_up_btn.addClass('show');
    } else {
        scroll_up_btn.removeClass('show');
    }
});

scroll_up_btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

/**Faculty */
$(document).ready(function () {
    $(".faculty-page-text").hover(
        function () {
            $(this).prev('div').children('img').animate({
                marginLeft: '-=10px',
                marginTop: '-=10px',
                height: '+=20px',
                width: '+=20px'
              });
            console.log('Triggered');
        },
        function () {
            $(this).prev('div').children('img').animate({
                marginLeft: '+=10px',
                marginTop: '+=10px',
                height: '-=20px',
                width: '-=20px'
              });
        }
    );
});