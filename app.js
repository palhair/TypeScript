"use strict";
function isDeliveryToHome(delivery) {
    return 'adress' in delivery;
}
class Cart {
    constructor() {
        this.products = [];
        this.price = 0;
        this.delivery;
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
    setDelivery(delivery, date) {
        if (typeof delivery == 'number') {
            this.delivery = {
                date: new Date(),
                id: delivery
            };
        }
        else {
            if (date) {
                this.delivery = {
                    date: date,
                    adress: delivery
                };
            }
        }
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
    calculatePrice() {
        this.products.forEach(product => this.price += product.price);
        return this.price;
    }
}
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
const cart = new Cart;
const shirt = new Product(1, 'Рубашка', 1500), shoes = new Product(2, 'Обувь', 2500), pans = new Product(3, 'Штаны', 2400), hats = new Product(4, 'Шапка', 500);
cart.addToCart(shirt);
cart.addToCart(shoes);
cart.addToCart(pans);
cart.addToCart(hats);
cart.setDelivery(33);
cart.chekout();
cart.calculatePrice();
