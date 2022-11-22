import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const loading = document.createElement('h1');
loading.innerHTML = 'carregando...';
loading.classList.add('loading');

const error = document.createElement('h1');
error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
error.style.color = 'red';
error.classList.add('error');

window.onload = async () => {
  const cartSavedIds = getSavedCartIDs();
  if (cartSavedIds.length > 0) {
    Promise.all(cartSavedIds.map((item) => fetchProduct(item)))
      .then((data) => {
        data.forEach((product) => {
          const element = createCartProductElement(product);
          document.querySelector('.cart__products').appendChild(element);
        });
      });
  }
  const container = document.querySelector('.products');
  container.appendChild(loading);
  fetchProductsList('computador')
    .then((products) => {
      container.removeChild(loading);
      products.forEach((product) => {
        const card = createProductElement(product);
        document.querySelector('.products').appendChild(card);
        const btn = card.querySelector('.product__add');
        btn.addEventListener('click', () => {
          saveCartID(product.id);
          fetchProduct(product.id)
            .then((data) => {
              const element = createCartProductElement(data);
              document.querySelector('.cart__products').appendChild(element);
            });
        });
      });
    })
    .catch(() => {
      container.removeChild(loading);
      container.appendChild(error);
    });
};
