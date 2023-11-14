import { Router } from "express";
import * as cartsController from '../controlers/cartsControler.js';


const router= Router();

router.get("/",cartsController.getAllCarts);

router.post("/", cartsController.createCart);

router.post("/add", cartsController.addToCart);





export default router;