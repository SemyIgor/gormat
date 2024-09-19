$(document).ready(function () {
    // var windowWidth = $(window).width();

    var hoverTimeout;

    $('.main-menu__item').on('mouseenter focus', function () {
        var menuItem = $(this);

        // if (windowWidth < 1200) {
        //     return;
        // }

        hoverTimeout = setTimeout(function () {
            menuItem.addClass('hover');

            if (menuItem.find('.sub-menu-main').length > 0) {
                $('body').addClass('show-main-menu');
                // backdropShow();
            }

        }, 700);
    }).on('mouseleave blur', function () {
        clearTimeout(hoverTimeout);
        $(this).removeClass('hover');
        $('body').removeClass('show-main-menu');
    });
})