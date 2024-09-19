$(document).ready(function () {
    $('body').on('click', '.backdrop-wall', function () {
        $('body').removeClass('backdrop');
        $('body').removeClass('show-mobile-menu-catalog');
        
        $('.mobile-main-menu__btn').removeClass('active');
    });
})