class User {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Users extends Array<User> { //наследование
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ')
    }
}

const users = new Users();
users.push(new User('Clod'));
users.push(new User('Hero'));
console.log(users.toString());

class UserList { // композиция
    users: User[];

    push(u: User){
        this.users.push(u);
    }
}

class Payment {
    date: Date;
}

class UserWithPayment extends Payment { //наследование (плохой вариант с разными сущностями)
    name: string;
}

class UserWithPayment2 { // композиция
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment){
        this.payment = payment;
        this.user = user;
    }
}