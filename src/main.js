import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const loading = document.createElement('h1');
loading.innerHTML = 'carregando...';
loading.classList.add('loading');

const error = document.createElement('h1');
error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
error.style.color = 'red';
error.classList.add('error');

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
    })
    .catch(() => {
      container.removeChild(loading);
      container.appendChild(error);
    });
};
