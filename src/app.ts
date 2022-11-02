interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory>{
    createdAt: Date;

    constructor(public name: string, public email: string){
        this.createdAt = new Date();
    }

    clone(): UserHistory   {
        const target = new UserHistory(this.name, this.email);
        target.createdAt = this.createdAt;
        return target;
    }
}

const user = new UserHistory('Nerd', 'ner@ff.com');
console.log(user);
const user2 = user.clone();
user2.email = 'non'
console.log(user2);
console.log(user);