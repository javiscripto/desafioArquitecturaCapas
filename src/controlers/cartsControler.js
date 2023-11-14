// controllers/cartsController.js
import * as cartsService from '../services/cartService.js';

async function getAllCarts(req, res) {
  try {
    const carts = await cartsService.getAllCarts();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCart(req, res) {
  try {
    const newCart = await cartsService.createCart(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addToCart(req, res) {
  const { cartId, productId, quantity } = req.body;

  try {
    const updatedCart = await cartsService.addToCart(cartId, productId, quantity);
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getAllCarts, createCart, addToCart };
