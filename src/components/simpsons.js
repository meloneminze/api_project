import './simpsons.scss';
import { createElement } from '../lib/dom';

export function simpsons(items) {
  const container = createElement('div', {
    className: 'simpsons'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'simpson'
    });
    container.appendChild(element);
  });
  return container;
}
