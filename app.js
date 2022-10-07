"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new ParsistedPayment().dataBaseId;
class User {
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
let adm = new Admin();
class HttpError extends Error {
    constructor(message, code) {
        super();
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
