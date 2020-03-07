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
  const titleElement = title('Simpsons Quotes');
  const showButton = createNewQuoteButton();

  const quote = fetchData();
  const quoteElement = createElement('div', {
    className: 'quote'
  });

  quoteElement.appendChild(document.createTextNode(quote.quote));
  header.appendChild(titleElement);
  main.appendChild(quoteElement);
  main.appendChild(showButton);

  return [header, main];
}

//Api-Funktion, response holt daten
async function fetchData() {
  const response = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes?count=1',
    //'https://httpbin.org/status/400',
    { mode: 'cors' }
  ); //holt Daten
  if (response.status > 200) {
    throw 'Something went wrong';
  }
  const [quote] = await response.json();
  return quote;
}
