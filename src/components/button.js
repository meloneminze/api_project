import './button.scss';
import { createElement } from '../lib/dom';

export function createNewQuoteButton() {
  const element = createElement('button', {
    type: 'button',
    innerText: 'Show next quote',
    className: 'showNewQuoteButton'
  });
  return element;
}
