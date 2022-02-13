export default function toggleBurger(clsBurger, navElement, clsNav) {
    $(this).toggleClass(clsBurger)
    navElement.toggleClass(clsNav);

    if ($(this).hasClass(clsBurger)) {
        $(document.documentElement).css('overflow-y', 'hidden');
        $(document.body).css('paddin-right', 0);
    } else {
        $(document.documentElement).css('overflow-y', 'auto');
        $(document.body).css('padding-right', `${$(window).width() - $(document.body).width()}px`);
    }
}