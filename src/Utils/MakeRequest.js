import fetchMock from 'fetch-mock';
import { buildProducts } from '../Mocks/Products';

fetchMock.get('/api/v1/products', { products: buildProducts(100) });

export default function(url) {
  return fetch(url).then(function(response) {
    return response.json();
  });
}
