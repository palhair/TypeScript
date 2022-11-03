"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getPriceItem() {
        return this.items.reduce((acc, i) => acc += i.getPrice(), 0);
    }
    getList() {
        return this.items.reduce((acc, i) => {
            let listOritem = i.getList();
            acc.push(listOritem);
            return acc;
        }, []);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.getPriceItem() + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPrice() {
        return this.getPriceItem();
    }
}
class Product extends DeliveryItem {
    constructor(price, name) {
        super();
        this.price = price;
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
    getList() {
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
