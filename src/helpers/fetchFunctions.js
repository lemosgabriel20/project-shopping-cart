export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (product) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};
