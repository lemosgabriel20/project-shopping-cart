import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    return await fetchProduct('MLB1405519561').then(data => {
      expect(fetch).toBeCalled();
    });
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    return await fetchProduct('MLB1405519561').then(data => {
      const ENDPOINT = 'https://api.mercadolibre.com/items/MLB1405519561';
      expect(fetch).toHaveBeenCalledWith(ENDPOINT);
    });
  });

  it('fetchProduct não recebe argumentos e retorna um erro', () => {
    return expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});
