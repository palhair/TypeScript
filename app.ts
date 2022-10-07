type PaymentStatus = 'new' | 'paid';
class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number){
        this.id = id;
    }

    pay(){
        this.status = 'paid';
    }

}

class ParsistedPayment extends Payment{
    dataBaseId: number;
    paidAt: Date;

    constructor(){
        const id = Math.random();
        super(id);
    }

    save(){

    }

    override pay(date?: Date){
        super.pay();
        if(date){
            this.paidAt = date;
        }
    }
}

new ParsistedPayment().dataBaseId;



class User {
    name: string = "user";
    constructor(){
        console.log(this.name);
    }
}

class Admin extends User {
    name: string = "admin";
    constructor(){
        super();
        console.log(this.name);
        
    }
}

let adm = new Admin();

class HttpError extends Error {
    code: number;

    constructor(message: string, code?: number){
        super();
        this.code = code ?? 500;
    }
}

