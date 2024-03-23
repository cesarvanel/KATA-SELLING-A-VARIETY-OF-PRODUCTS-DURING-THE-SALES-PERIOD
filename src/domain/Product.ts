type ProductConstructor = {
    readonly id: number,
    readonly name: string,
    price: number,
    quantity: number
}

class Product {

    private hasDiscount: boolean

    constructor(private props: ProductConstructor) {
        this.hasDiscount = false;
    }

    public name(): string {
        return this.props.name;
    }

    public id(): number {
        return this.props.id;
    }

    public price(): number {
        return this.props.price;
    }

    public applyDiscount() {
        this.hasDiscount = true;
    }

    public discount() {
        return this.hasDiscount;
    }
}

export default Product;