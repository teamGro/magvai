!function(){"use strict";const t=[{img:"card1",title:"bridge",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card2",title:"Water",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card3",title:"bridge",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card4",title:"Water",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card5",title:"bridge",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card6",title:"forest",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card7",title:"forest",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card8",title:"nature",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card9",title:"nature",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"},{img:"card10",title:"nature",desc:"How to increase your productivity with a Music",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…",posted:"Posted by ",author:"Eugenia",date:", on July  24, 2019"}];function e(t){return`\n            <li class="cards__item card">\n              <picture>\n                <source srcset="./img/${t.img}.webp" type="image/webp">\n                <img src="./img/${t.img}.jpg" alt="bridge">\n              </picture>\n              <div class="card__wrapper">\n                <h3 class="card__title">${t.title}</h3>\n                <p class="card__desc">${t.desc}</p>\n                <p class="card__text">${t.text}</p>\n                <p class="card__posted">\n                  ${t.posted} <span class="card_posted--bold">${t.author}</span> ${t.date}\n                </p>\n                <a href="#" class="card__btn">Continue reading</a>\n              </div>\n            </li>\n    `}async function i(i){const s=await fetch("https://jsonplaceholder.typicode.com/photos/6"),a=await s.json(),o=t[0];o.img=`card${Math.ceil(10*Math.random())}`,o.title=a.title,i.append(e(o))}$(document).ready(()=>{$("#mainSlider").owlCarousel({items:1,loop:!0,autoplay:!0,autoplayTimeout:2e3});const s=$("#cards");!function(t,i){t.forEach(t=>{i.append(e(t))})}(t,s);const a=$("#dowloadMore");a.on("click",()=>{for(let t=0;t<6;t++)i(s)})})}();