import {
  renderStartCards,
  startImgOptions,
  downloadPostAndRender
} from './cards';

import toggleBurger from './burger';
import { onInputFocus, onInputBlur, isRequiredFieldsFilled, closePopup } from './popup';

$(document).ready(() => {
  $('#mainSlider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000
  });

  const cardsList = $('#cards')
  renderStartCards(startImgOptions, cardsList);

  const downloadMoreBtn = $('#dowloadMore');
  const requestQty = 6;
  downloadMoreBtn.on('click', function () {
    $(this).addClass('cards__btn--loading');
    const self = $(this);
    setTimeout(function () {
      for (let i = 0; i < requestQty; i++) {
        downloadPostAndRender(cardsList);
      }

      self.removeClass('cards__btn--loading');
    }, 3000);
  });

  const burgerBtn = $('#burger');
  const mobileNavElement = $('#mobileMenu');
  burgerBtn.on('click', function () {
    toggleBurger.call($(this), 'burger--active', mobileNavElement, 'mobile-nav--active');
  });

  const showPopupBtn = $('[data-popup]');
  const overlayElem = $('.overlay');
  showPopupBtn.on('click', () => {
    overlayElem.addClass('overlay--active');
    $(document.documentElement).css('overflow-y', 'hidden');
    $(document.body).css('paddin-right', 0);
  });

  const closePopupBtn = $('#closePopup');
  const popupElem = $('.popup');
  closePopupBtn.on('click', () => {
    closePopup(popupElem, overlayElem);
  });

  const popupForm = $('#popupForm');
  popupForm.find('input, textarea, label').each(function () {
    if ($(this).prop('tagName') === 'LABEL') {
      $(this).on('click', function () {
        onInputFocus.call($(this).parent().find('input, textarea'));
        $(this).parent().find('input, textarea').trigger('focus');
      });
    }

    $(this).on('focus', onInputFocus);
    $(this).on('blur', onInputBlur);
  });

  const sendApplicationBtn = $('#sendApplication');
  sendApplicationBtn.on('click', (e) => {
    e.preventDefault();
    if (!isRequiredFieldsFilled(popupForm)) return;
    closePopup(popupElem, overlayElem);
  });

  $(document).on('keydown', (e) => {
    if (e.keyCode === 27 && overlayElem.hasClass('overlay--active')) {
      closePopup(popupElem, overlayElem);
    }
  });

});

