export function onInputFocus() {
    $(this).parent().find('label').addClass('popup__label--active');
    $(this).removeClass('popup__input--required');
}

export function onInputBlur() {
    if (!$(this).val().trim()) {
        $(this).parent().find('label').removeClass('popup__label--active');
    }
    if ($(this).is('[data-required]') && !$(this).val().trim()) {
        $(this).addClass('popup__input--required');
    }
}

export function isRequiredFieldsFilled(form) {
    let isFilled = true;
    form.find('[data-required').each(function () {
        if (!$(this).val()) {
            $(this).addClass('popup__input--required');
            isFilled = false;
        }
    })

    return isFilled;;
}

export function closePopup(popupElem, overlayElem) {
    popupElem.addClass('popup--hide');
    setTimeout(() => {
        popupElem.removeClass('popup--hide');
        overlayElem.removeClass('overlay--active');
        $(document.documentElement).css('overflow-y', 'auto');
        $(document.body).css('padding-right', `${$(window).width() - $(document.body).width()}px`);
    }, 500);
}
