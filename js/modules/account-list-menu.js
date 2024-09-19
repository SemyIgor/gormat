$(document).ready(function () {
    // var windowWidth = $(window).width();

    var hoverTimeout;

    $('.account-list__item').on('mouseenter focus', function () {
        var menuItem = $(this);

        // if (windowWidth < 1200) {
        //     return;
        // }

        hoverTimeout = setTimeout(function () {
            menuItem.addClass('hover');

            if (menuItem.find('.sub-menu-account').length > 0) {
                $('body').addClass('show-sub-menu-account');
                // backdropShow();
            }

        }, 0);
    }).on('mouseleave blur', function () {
        clearTimeout(hoverTimeout);
        $(this).removeClass('hover');
        $('body').removeClass('show-sub-menu-account');
    });
})