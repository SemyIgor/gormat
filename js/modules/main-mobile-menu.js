$(document).ready(function () {
    $('body').on('click', '.mobile-main-menu__item_catalog button', function() {
        $('body').toggleClass('show-mobile-menu-catalog');
        $('body').toggleClass('backdrop');
    });
})