import Basket from "../domain/Basket";
import CartItem from "../domain/CartItem";
import DateGenerator from "../domain/DateGenerator";
import Product from "../domain/Product";
import { CartItemDto } from "../dto/CartItemDto";
import ProductService from "./ProductService";

export default class BasketService {

    private basket: Basket;

    constructor(
        private dateGenerator: DateGenerator,
        private productService: ProductService
    ) {
        this.basket = new Basket();
    }
    
    public addProduct(data: CartItemDto) : Basket {
        const product : Product = this.productService.getProductById(data.productId)!;
        let cartItem =  CartItem.create(data.quantity, product.price() , product.discount(), this.dateGenerator.getDate());
        this.basket.addItem(cartItem);
        return this.basket;
    }
}