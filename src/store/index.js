import Products from "./products";
import Cart from "./cart"
import Order from "./order"

import * as cart from '../api/cart'
import * as products from '../api/products'


export default class RootStore {
    constructor() {
        this.storage = window.localStorage;

        this.api = {cart, products}

        this.productsStore = new Products(this)
        this.cartStore = new Cart(this)
        this.orderStore = new Order(this)
    }
}