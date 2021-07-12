import { updateProducts } from './rendering';
import { products } from './products';
import { deleteProduct } from './deleting';

import sanitizeHtml from 'sanitize-html';

const titleEl = document.getElementById('title');
const priceEl = document.getElementById('price');

export function addProduct() {
  const title = sanitizeHtml(titleEl.value);
  const price = sanitizeHtml(priceEl.value);

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }
  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };
  products.unshift(newProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
