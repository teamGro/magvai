export const startImgOptions = [
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

export function renderStartCards(cards, listElement) {
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
};

export async function downloadPostAndRender(listElement) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/6');
    const post = await response.json();

    const card = startImgOptions[0];
    card.img = `card${Math.ceil(Math.random() * 10)}`;
    card.title = post.title;
    listElement.append(renderCard(card));
}