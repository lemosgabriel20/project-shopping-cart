import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';
import fetchSimulator from './mocks/fetchSimulator';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    return await fetchProductsList('computador').then(data => {
      expect(fetch).toBeCalled();
    });
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    return await fetchProductsList('computador').then(data => {
      const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
      expect(fetch).toHaveBeenCalledWith(ENDPOINT);
    });
  });

  it('fetchProductsList não recebe argumentos e retorna um erro', () => {
    return expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
  // it('...', () => {
  // });
});
