import Product from "../domain/Product";

export default class ProductService {
    
    private products: Product[];

    constructor() {
        let product2 = new Product({id: 2, name: 'Chemise', price: 1000, quantity: 5000});
        product2.applyDiscount();
        this.products = [
            new Product({id: 1, name: 'Sac', price:2500, quantity:100}),
            product2,
            new Product({id: 3, name: 'Chaussure', price: 400, quantity: 5000}),
            new Product({id: 4, name: 'Chausette', price: 50, quantity: 10000}),
            new Product({id: 5, name: 'Tasse', price: 100, quantity: 20})
        ];
    }

    public getProducts(): Product[] {
        return this.products;
    }
    
    public getProductById(productId: number) {
        const product = this.products.find((p) => p.id() == productId);
        return product??null; 
    }

    public getProductByName(name: string): Product|null {
        const product = this.products.find((p) => p.name() == name);
        return product??null;
    }    
    
}