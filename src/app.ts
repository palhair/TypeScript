abstract class DeliveryItem {
    items: DeliveryItem[] = [];
    addItem(item: DeliveryItem){
        this.items.push(item);
    }
    abstract getPrice(): number;
    getPriceItem(): number {
        return this.items.reduce((acc:number, i: DeliveryItem) => acc += i.getPrice(), 0)
    }
    getList(): any[] | string {
        return this.items.reduce( (acc: any[] , i: DeliveryItem ) =>  {
            let listOritem = i.getList();
            
                acc.push(listOritem);
            
            return acc;
        }, [])
    }
}

class DeliveryShop extends DeliveryItem{
    constructor(private deliveryFee:number){
        super();
    }
    getPrice(): number {
        return this.getPriceItem() + this.deliveryFee;
    }
  

}

class Package extends DeliveryItem{
    
    getPrice(): number {
        return this.getPriceItem();
    }

}

class Product extends DeliveryItem {
    constructor(private price:number, private name: string){
        super();
    }
    getPrice(): number {
        return this.price;
    }
    override getList(): string {
       return `${this.name}: ${this.price} руб`; 
    }

}

let shop = new DeliveryShop(100);
shop.addItem(new Product(200, 'Кабель'));
shop.addItem(new Product(1200, 'Зарядка'));
const pack = new Package();
pack.addItem(new Product(150, 'Пленка'));
pack.addItem(new Product(50, 'Салфетка'));
const subPack = new Package();
subPack.addItem(new Product(9000, 'Телефон'));
subPack.addItem(new Product(5000, 'Наушники'));
subPack.addItem(new Product(500, 'Чехол'));
pack.addItem(subPack);
shop.addItem(pack);
shop.addItem(new Product(1500, 'mouse'));
shop.addItem(new Package());
console.log(shop.getPrice());
console.log(shop.getList());
