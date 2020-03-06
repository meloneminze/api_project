import './index.scss';
import { app } from './app';

//Für jedes Element wird ein Element in Body geschrieben
const elements = app();
elements.forEach(element => {
  document.body.appendChild(element);
});
