import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { createNewQuoteButton } from './components/button';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });

  //   const quoteImg = createElement('img', {
  //     className: 'img'
  //   });

  //   function imgCreate(src) {
  //     const img = document.createElement('img');
  //     image = src;
  //     return img;
  //   }

  //   const quoteImg = new Image(100, 100);
  //   quoteImg.src = fetchData(quote.image);
  //   document.body.appendChild(quoteImg);

  const titleElement = title('Simpsons Quotes');
  const showButton = createNewQuoteButton();

  const quote = fetchData();
  const quoteElement = createElement('div', {
    className: 'quote'
  });

  fetchData().then(quote => {
    quoteElement.appendChild(document.createTextNode(quote.quote));
    quoteElement.appendChild(document.createTextNode(quote.character));
    //quoteImg.appendChild(document.createTextNode(quote.image));
  });
  const quoteImg = new Image();
  quoteImg.src = document.createTextNode(quote.image);

  header.appendChild(titleElement);
  main.appendChild(quoteElement);
  main.appendChild(quoteImg);

  main.appendChild(showButton);

  return [header, main];
}

//const button = document.querySelector('button');
// showButton.addEventListener('click', event => {
//   fetchData();
// });

//Api-Funktion, response holt daten
async function fetchData() {
  const response = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes?count=1',
    //'https://httpbin.org/status/400',
    { mode: 'cors' }
  );
  if (response.status > 200) {
    throw 'Something went wrong';
  }
  const [quote] = await response.json();
  return quote;
}

//Erster Versuch
//showButton.addEventListener(click, fetchData);
//   async function fetchData() {
//     const response = await fetch(
//       'https://thesimpsonsquoteapi.glitch.me/quotes?count=1',
//       //'https://httpbin.org/status/400',
//       { mode: 'cors' }
//     ); //holt Daten
//     if (response.status > 200) {
//       throw 'Something went wrong';
//     }
//     const [quote] = await response.json();
//     return quote;
//   }
