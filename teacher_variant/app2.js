"use strict";
class Product2 {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class DeliveryMain {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends DeliveryMain {
    constructor(date, adres) {
        super(date);
        this.adres = adres;
    }
}
class PostDelivery extends DeliveryMain {
    constructor(adres) {
        super(new Date());
        this.adres = adres;
    }
}
class CartMain {
    constructor() {
        this.products = [];
        this.price = 0;
    }
    addToCart(product) {
        this.products.push(product);
        this.calculatePrice();
    }
    deleteFromCart(id) {
        if (this.products.find(product => product.id == id)) {
            this.products = this.products.filter(product => {
                return product.id !== id;
            });
        }
        else {
            throw new Error('Нет продукта с данным ид');
        }
        this.calculatePrice();
    }
    calculatePrice() {
        this.products.forEach(product => this.price += product.price);
        return this.price;
    }
    setDelivery(dilevery) {
        this.delivery = dilevery;
    }
    chekout() {
        if (this.delivery == undefined) {
            throw new Error('Доставка не задана');
        }
        else if (this.products.length == 0) {
            throw new Error('Корзина пустая');
        }
        else {
            console.log(true);
        }
    }
    showCart() {
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
