import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

window.onload = async () => {
  const products = await fetchProductsList('computador');
  products.forEach((product) => {
    document.querySelector('.products').appendChild(createProductElement(product));
  });
};
