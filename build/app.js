"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaypentDetail(id) {
        return this.data.find(d => d.id == id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaypentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaypentDetail(id);
        }
        console.log('Попытка не пытка');
        return undefined;
    }
}
const payment = new PaymentAccessProxy(new PaymentAPI, 1);
//const payment1 = new PaymentAccessProxy(new PaymentAPI, 3);
console.log(payment.getPaypentDetail(1));
//console.log(payment1.getPaypentDetail(1));
