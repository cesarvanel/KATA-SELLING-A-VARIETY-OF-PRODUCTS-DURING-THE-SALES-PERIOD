import InMemoryDateGenerator from "./InMemoryDateGenerator";
import Product from "./domain/Product";
import ProductService from "./services/ProductService";
import BasketService from "./services/BasketService";
import { CartItemDto } from "./dto/CartItemDto";


describe('KATA VENTE DE PRODUIT', () => {

    let productService:ProductService;
    let basketService: BasketService
    let currentDate: InMemoryDateGenerator;
    
    beforeAll(() => {
        productService = new ProductService();
        currentDate = new InMemoryDateGenerator();
    });

    describe('Get Products', () => {
        
        test('should get all products available', () => {
            const products: Product[] = productService.getProducts();
            expect(products.length).toBe(5);
            expect(products[0].name()).toBe('Sac');
        });
        
        test('should get product by name', () => {
            const product : Product|null = productService.getProductByName('Chemise');
            expect(product).toBeInstanceOf(Product);
            expect(product?.name()).toBe('Chemise');
        })    
    });
    

    describe('Basket', () => {
        
        describe('add product to basket', () => {
            
            test('should add product to basket', () => {
                
                currentDate.setDate('2024-11-11');
                basketService = new BasketService(currentDate, productService);

                const product = productService.getProductByName('Sac');
                const basket = basketService.addProduct({quantity: 10, productId : product?.id(), unitPrice: product?.price()} as CartItemDto);
                
                expect(basket.amount()).toBe(25000);
                expect(basket.quantities()).toBe(10);
                expect(basket.items().length).toBe(1);
            });
            
            test('should apply discount on basket', () => {
                currentDate.setDate('2024-12-11');
                basketService = new BasketService(currentDate, productService);
                const product = productService.getProductByName('Sac');
                const basket = basketService.addProduct({quantity: 10, productId : product?.id()} as CartItemDto);
                expect(basket.amount()).toBe(20000);

            })
            
            test('should add product with discount apply on it', () => {
                currentDate.setDate('2024-11-11');
                basketService = new BasketService(currentDate, productService);
                const product = productService.getProductByName('Chemise');
                const basket = basketService.addProduct({quantity: 10, productId : product?.id()} as CartItemDto);
                expect(basket.amount()).toBe(9500);
            });
            
        })
        
    });
    

});
