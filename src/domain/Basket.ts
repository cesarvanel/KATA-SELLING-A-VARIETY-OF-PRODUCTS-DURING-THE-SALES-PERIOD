import CartItem from "./CartItem";

enum DISCOUNT_VALUE {
    DISCOUNT_END_YEAR = 20,
    DISCOUNT_CURRENT_PRODUCT = 5
}

class Basket {
    
    private cart: CartItem[] = []
   
    constructor() {}
    
    public addItem(cartItem: CartItem) {
        this.cart.push(cartItem);
    }

    public items() : CartItem[] {
        return this.cart;
    }
    
    public quantities(): number {
        return this.cart.reduce((quantities, item) => quantities + item.getQuantity(), 0);
    }

    public amount(): number {
        return this.cart.reduce((quantities, item) => quantities + item.getTotalPrice(), 0);
    }


}

export default Basket
