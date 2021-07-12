import { updateProducts } from './rendering';
import { products } from './products';

export function deleteProduct(prodId) {
  const deletedProductIndex = products.findIndex((prod) => prod.id === prod);
  const deletedProduct = products[deletedProductIndex];
  products.splice(deletedProductIndex, 1);
  updateProducts(deletedProduct, prodId, deleteProduct, false);
}
