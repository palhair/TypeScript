class Product2 {
    
    constructor(
        public id: number,
        public name: string, 
        public price: number
        ){ }
}

class DeliveryMain {
    constructor(public date: Date) {}
}

class HomeDelivery extends DeliveryMain{
    constructor(date: Date, public adres: string){
        super(date);
    }
}

class PostDelivery extends DeliveryMain{
    constructor(public adres: string){
        super(new Date());
    }
}

type UDilevery = HomeDelivery | PostDelivery;

class CartMain {
    private products: Product2[] = [];
    private delivery: UDilevery;
    private price: number = 0;

    public addToCart (product: Product2): void{
        this.products.push(product);
        this.calculatePrice()
    }

    public deleteFromCart(id:number): void{
        if(this.products.find(product => product.id == id)){
        this.products = this.products.filter(product => {
            return product.id !== id;
        })
        }else {
            throw new Error('Нет продукта с данным ид');
        }
        this.calculatePrice()
    }

    public calculatePrice(): number{
        this.products.forEach(product => this.price += product.price);
        return this.price
    }

    public setDelivery(dilevery: UDilevery): void{
        this.delivery = dilevery;
    }
    chekout(): void{
        if ( this.delivery == undefined){
            throw new Error('Доставка не задана');
        }else if(this.products.length == 0){
            throw new Error('Корзина пустая');
        }else{
            console.log(true);
        }
    }

    showCart(): Product2[] {
        console.log(this.products);
        return this.products;
    }


}

const cart1 = new CartMain;

cart1.addToCart(new Product2(1, 'Рубашка', 1500));
cart1.addToCart(new Product2(2, 'Обувь', 2500));
cart1.addToCart(new Product2(3, 'Штаны', 2400));
cart1.addToCart(new Product2(4, 'Шапка', 500));

cart1.setDelivery(new HomeDelivery(new Date, 'dfss'));

cart1.chekout();

cart1.showCart();

cart1.calculatePrice();