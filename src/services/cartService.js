// services/cartsService.js
import * as cartsData from '../persistence/cartsData.js';

async function getAllCarts() {
  try {
    return await cartsData.getAllCarts();
  } catch (error) {
    throw new Error(`Error en el servicio al obtener los carritos: ${error.message}`);
  }
}

async function createCart(cartData) {
  try {
    return await cartsData.createCart(cartData);
  } catch (error) {
    throw new Error(`Error en el servicio al crear el carrito: ${error.message}`);
  }
}

async function addToCart(cartId, productId, quantity) {
  try {
    return await cartsData.addToCart(cartId, productId, quantity);
  } catch (error) {
    throw new Error(`Error en el servicio al agregar el producto al carrito: ${error.message}`);
  }
}

export { getAllCarts, createCart, addToCart };
