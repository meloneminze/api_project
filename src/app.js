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

  const titleElement = title('Simspons Quotes');
  header.appendChild(titleElement);
  const buttonElement = createNewQuoteButton();
  main.appendChild(buttonElement);

  const section = createElement('div', {
    className: 'div'
  });
  main.appendChild(section);

  const loadData = async function() {
    const response = await fetch(
      'https://thesimpsonsquoteapi.glitch.me/quotes'
    );
    const [quote] = await response.json();
    section.innerHTML = '';
    section.appendChild(createElement('div', { innerText: quote.quote }));
    section.appendChild(createElement('div', { innerText: quote.character }));
    section.appendChild(createElement('img', { src: quote.image }));
  };

  buttonElement.addEventListener('click', loadData);

  loadData();

  return [header, main];
}
