import {
  renderStartCards,
  startImgOptions,
  downloadPostAndRender
} from './cards';

import toggleBurger from './burger';

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
  })

});

