import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const loading = document.createElement('p');
loading.innerHTML = 'carregando...';
loading.classList.add('loading');

const loop = true;
window.onload = async () => {
  const container = document.querySelector('.products');
  container.appendChild(loading);
  fetchProductsList('computador')
    .then((products) => {
      container.removeChild(loading);
      products.forEach((product) => {
        document.querySelector('.products').appendChild(createProductElement(product));
      });
    });
};
