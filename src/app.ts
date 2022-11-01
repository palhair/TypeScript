interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance{
    id: number;
    status: string;
    private _vehicle: any;
    setVehicle(vehicle: any): void {
        this._vehicle = vehicle;
    }
    async submit(): Promise<boolean> {
        const res = await fetch('/', {
            method: "POST",
            body: JSON.stringify({vehicle: this._vehicle})
        })
        const data = await res.json();
        return data.isSuccess;
    }
}

class ABInsurance implements IInsurance{
    id: number;
    status: string;
    private _vehicle: any;
    setVehicle(vehicle: any): void {
        this._vehicle = vehicle;
    }
    async submit(): Promise<boolean> {
        const res = await fetch('...', {
            method: "POST",
            body: JSON.stringify({vehicle: this._vehicle})
        })
        const data = await res.json();
        return data.true;
    }
}

abstract class InsuranceFactory {
    db: any;
    abstract createInsurance(): IInsurance

    saveHistory(ins: IInsurance){
        this.db.save(ins.id, ins.status)
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
        return new TFInsurance;
    }
}

class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABInsurance {
        return new ABInsurance;
    }
}

const tfInsurance = new TFInsuranceFactory()
const ins = tfInsurance.createInsurance();
tfInsurance.saveHistory(ins);

const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
}

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
    db: any;
    createInsurance <T extends keyof IT>(ins: T): IT[T] {
        return INSURANCE_TYPE[ins];
    }

    saveHistory(ins: IInsurance){
        this.db.save(ins.id, ins.status)
    }
}

const insAlt = new InsuranceFactoryAlt();
const ins2 = new (insAlt.createInsurance('tf'));
insAlt.saveHistory(ins2);