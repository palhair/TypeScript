class Vehicle {
    public make: string;//доступны везде
    private damages: string[];// доступны только в методах класса
    private _model: string;
    protected run: number;//доступны в методах класса и методах наследующих классов
    #price: number;//private

    set model(m: string){
        this._model = m;
        this.#price = 100;
    }

    get model(): string{
        return this._model;
    }

    isPriceEqual(v: Vehicle){
        return this.#price === v.#price; // имеем досту к приватному свойству внешнего класса
    }

    addDamage(damage: string){
        this.damages.push(damage)
    }
}

new Vehicle();

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62;
    }
}

new EuroTruck();