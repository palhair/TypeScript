interface IDeliveryToHome {
    date: Date;
    adress: string;
}

interface IDeliveryToPost {
    date: Date;
    id: number
}

type Delivery = IDeliveryToPost | IDeliveryToHome;

function isDeliveryToHome (delivery: IDeliveryToHome | IDeliveryToPost ) : delivery is IDeliveryToHome {
    return 'adress' in delivery;    
}
class Cart {
    private products: Product[] = [];
    private price: number = 0;
    private delivery: Delivery;
    

    addToCart (product: Product): void{
        this.products.push(product);
        this.calculatePrice()
    }

    deleteFromCart(id:number): void{
        if(this.products.find(product => product.id == id)){
        this.products = this.products.filter(product => {
            return product.id !== id;
        })
        }else {
            throw new Error('Нет продукта с данным ид');
        }
        this.calculatePrice()
    }

    setDelivery(delivery: number, ): void;
    setDelivery(delivery: string, date: Date ): void;
    setDelivery(delivery: string | number, date?: Date ): void{
        if (typeof delivery == 'number'){
            this.delivery = {
                date: new Date(),
                id: delivery

            }
        }else{
            if(date){
                this.delivery = {
                    date: date,
                    adress: delivery
                }
            }

        }
        
    }
    
    chekout(): void {
        if ( this.delivery == undefined){
            throw new Error('Доставка не задана');
        }else if(this.products.length == 0){
            throw new Error('Корзина пустая');
        }else{
            console.log(true);
        }
    }

    calculatePrice(): number{
        this.products.forEach(product => this.price += product.price);
        return this.price
    }

}

class Product {
    
    constructor(
        public id: number,
        public name: string, 
        public price: number
        ){ }
}

const cart = new Cart;
const shirt = new Product(1, 'Рубашка', 1500),
shoes = new Product(2, 'Обувь', 2500),
pans = new Product(3, 'Штаны', 2400),
hats = new Product(4, 'Шапка', 500);
cart.addToCart(shirt);
cart.addToCart(shoes);
cart.addToCart(pans);
cart.addToCart(hats);
cart.setDelivery(33);
cart.chekout();
cart.calculatePrice();



