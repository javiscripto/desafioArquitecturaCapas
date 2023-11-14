
import { cartModel } from './models/cartModel.js';

async function getAllCarts() {
  try {
    return await cartModel.find();
  } catch (error) {
    throw new Error('Error al obtener los carritos desde la base de datos');
  }
}

async function createCart(cartData) {
  try {
    return await cartModel.create(cartData);
  } catch (error) {
    throw new Error('Error al crear el carrito en la base de datos');
  }
}

async function addToCart(cartId, productId, quantity) {
  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      throw new Error('Carrito no encontrado en la base de datos');
    }

    const newItem = { item: productId, quantity };
    cart.products.push(newItem);

    return await cart.save();
  } catch (error) {
    throw new Error('Error al agregar el producto al carrito en la base de datos');
  }
}

export { getAllCarts, createCart, addToCart };
