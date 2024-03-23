enum DISCOUNT_VALUE {
    DISCOUNT_END_YEAR = 20,
    DISCOUNT_CURRENT_PRODUCT = 5
}

export default class CartItem {
    private startPromotionDate = new Date((new Date()).getFullYear() + '-12-10');
    private endPromotionDate = new Date((new Date()).getFullYear() + '-12-31');
    private discountPrice?: number;
    private quantity: number;
    private price: number;
    private totalPrice: number;
    private currentDate: Date;
    private hasDiscount: boolean;

    private constructor() {
        this.quantity = 0;
        this.price = 0;
        this.currentDate = new Date();
        this.hasDiscount = false;
        this.totalPrice = 0;
    }

    public static create(
        quantity: number,
        price: number,
        productHasDiscount: boolean,
        currentDate: Date
    ) {

        let item = new CartItem();
        item.currentDate = currentDate;
        item.price = price;
        item.hasDiscount = productHasDiscount;
        item.quantity = quantity;
        item.applyDiscount();
        return item;
    }

    public getQuantity() : number {
        return this.quantity;
    }   

    public getPrice() : number {
        return this.price;
    }

    public getTotalPrice() : number {
        return this.totalPrice;
    }

    private applyDiscount() {
        if (this.onDiscountPeriod()) {
            const discountAmount = (this.price * DISCOUNT_VALUE.DISCOUNT_END_YEAR) / 100;
            this.discountPrice = this.price - discountAmount;
        } else {
           this.applyProductSelectedDiscount(); 
        }
        this.cartItemAmountApplyDiscount();
    }

    private onDiscountPeriod() : boolean {
        return this.startPromotionDate <= this.currentDate && this.currentDate <= this.endPromotionDate
    }

    private cartItemAmountApplyDiscount() {
        if (this.discountPrice) {
            this.totalPrice = this.quantity * this.discountPrice;
            return;
        } 
        this.totalPrice = this.quantity * this.price;
    }

    private applyProductSelectedDiscount() {
        if (this.hasDiscount) {
            const discountAmount = (this.price * DISCOUNT_VALUE.DISCOUNT_CURRENT_PRODUCT) / 100;
            this.discountPrice = this.price - discountAmount;
        }
    }
}