interface IPaymentAPI{
    getPaypentDetail(id: number):IPaymentDetail | undefined;
}

interface IPaymentDetail {
    id: number;
    sum: number;
}

class PaymentAPI implements IPaymentAPI{
    private data: IPaymentDetail[] = [{id:1, sum: 10000}];
    getPaypentDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id == id);
    }

}

class PaymentAccessProxy implements IPaymentAPI {
    constructor(private api: PaymentAPI, private userId: number){}
    getPaypentDetail(id: number): IPaymentDetail | undefined {
        if (this.userId === 1){
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