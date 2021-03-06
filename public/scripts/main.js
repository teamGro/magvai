(function () {
    'use strict';

    const startImgOptions = [
        {
            img: 'card1',
            title: 'bridge',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card2',
            title: 'Water',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card3',
            title: 'bridge',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card4',
            title: 'Water',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card5',
            title: 'bridge',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card6',
            title: 'forest',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card7',
            title: 'forest',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card8',
            title: 'nature',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card9',
            title: 'nature',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
        {
            img: 'card10',
            title: 'nature',
            desc: 'How to increase your productivity with a Music',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
            posted: 'Posted by ',
            author: 'Eugenia',
            date: ', on July  24, 2019'
        },
    ];

    function renderStartCards(cards, listElement) {
        cards.forEach((item) => {
            listElement.append(renderCard(item));
        });

    }

    function renderCard(card) {
        return `
            <li class="cards__item card card--new">
              <picture>
                <source srcset="./img/${card.img}.webp" type="image/webp">
                <img src="./img/${card.img}.jpg" alt="bridge">
              </picture>
              <div class="card__wrapper">
                <h3 class="card__title">${card.title}</h3>
                <p class="card__desc">${card.desc}</p>
                <p class="card__text">${card.text}</p>
                <p class="card__posted">
                  ${card.posted} <span class="card__posted--bold">${card.author}</span> ${card.date}
                </p>
                <a href="#" class="card__btn">Continue reading</a>
              </div>
            </li>
    `;
    }
    async function downloadPostAndRender(listElement) {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/6');
        const post = await response.json();

        const card = startImgOptions[0];
        card.img = `card${Math.ceil(Math.random() * 10)}`;
        card.title = post.title;
        listElement.append(renderCard(card));
    }

    function toggleBurger(clsBurger, navElement, clsNav) {
        $(this).toggleClass(clsBurger);
        navElement.toggleClass(clsNav);

        if ($(this).hasClass(clsBurger)) {
            $(document.documentElement).css('overflow-y', 'hidden');
            $(document.body).css('paddin-right', 0);
        } else {
            $(document.documentElement).css('overflow-y', 'auto');
            $(document.body).css('padding-right', `${$(window).width() - $(document.body).width()}px`);
        }
    }

    function onInputFocus() {
        $(this).parent().find('label').addClass('popup__label--active');
        $(this).removeClass('popup__input--required');
    }

    function onInputBlur() {
        if (!$(this).val().trim()) {
            $(this).parent().find('label').removeClass('popup__label--active');
        }
        if ($(this).is('[data-required]') && !$(this).val().trim()) {
            $(this).addClass('popup__input--required');
        }
    }

    function isRequiredFieldsFilled(form) {
        let isFilled = true;
        form.find('[data-required').each(function () {
            if (!$(this).val()) {
                $(this).addClass('popup__input--required');
                isFilled = false;
            }
        });

        return isFilled;}

    function closePopup(popupElem, overlayElem) {
        popupElem.addClass('popup--hide');
        setTimeout(() => {
            popupElem.removeClass('popup--hide');
            overlayElem.removeClass('overlay--active');
            $(document.documentElement).css('overflow-y', 'auto');
            $(document.body).css('padding-right', `${$(window).width() - $(document.body).width()}px`);
        }, 500);
    }

    $(document).ready(() => {
      $('#mainSlider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
      });

      const cardsList = $('#cards');
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

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
