import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    return await fetchProductsList('computador').then(data => {
      expect(typeof data).toBe('object');
    });
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    return expect(fetchProductsList('computador')).resolves.toBe(computadorSearch)
  });

  it('fetchProductsList não recebe argumentos e retorna um erro', () => {
    return expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
  // it('...', () => {
  // });
});
