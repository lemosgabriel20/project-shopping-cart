import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    return fetchProductsList('computador').then(data => {
      expect(typeof data).toBe('promise');
    });
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    return fetchProductsList('computador').then(data => {
      expect(data.name).toBe('computador');
    });
  });

  it('fetchProductsList não recebe argumentos e retorna um erro', () => {
    return fetchProductsList('computador').rejects.toThrow('Termo de busca não informado');
  });
  // it('...', () => {
  // });
});
