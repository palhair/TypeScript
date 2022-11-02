"use strict";
class UserHistory {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
    clone() {
        const target = new UserHistory(this.name, this.email);
        target.createdAt = this.createdAt;
        return target;
    }
}
const user = new UserHistory('Nerd', 'ner@ff.com');
console.log(user);
const user2 = user.clone();
user2.email = 'non';
console.log(user2);
console.log(user);
