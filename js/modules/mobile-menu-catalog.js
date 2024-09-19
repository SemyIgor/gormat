$(document).ready(function () {
    $('body').on('click', '.mobile-menu-catalog__item.forward > .mobile-menu-catalog__link', function() {
        $(this).toggleClass('active');
        return false;
    });

    $('body').on('click', '.mobile-menu-catalog__item.back > .mobile-menu-catalog__link', function() {
        $(this).closest('.mobile-menu-catalog__sub-menu').prev('.active').removeClass('active');
    });
})