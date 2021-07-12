import { products } from './products';
import { renderProducts } from './rendering';

const addProduct = (event) => {
  event.preventDefault();
  import('./adding.js').then((mod) => {
    mod.addProduct(event);
  });
};

const deleteProduct = (productId) => {
  import('./deleting.js').then((mod) => {
    mod.deleteProduct(productId);
  });
};

const initProducts = () => renderProducts(products, deleteProduct);

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
