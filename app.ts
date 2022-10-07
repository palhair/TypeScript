interface ILogger {
    //log: (...args) => void;
    log(...args):void
    error(...args):void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
    async error(...args: any[]): Promise<void> {
        //кинуть во внешнюю сиситему
        console.log(...args);
    }
    
}

interface IPayable {
    pay(paymentId: number) : void;
    price?: number;
}

interface IDeletable {
    delete(): void;
}
class User implements IPayable, IDeletable{
    delete(): void {
        throw new Error("Method not implemented.");
    }
    pay(paymentId: number): void {
        throw new Error("Method not implemented.");
    }
   
}
