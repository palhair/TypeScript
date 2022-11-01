"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TFInsurance {
    setVehicle(vehicle) {
        this._vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('/', {
                method: "POST",
                body: JSON.stringify({ vehicle: this._vehicle })
            });
            const data = yield res.json();
            return data.isSuccess;
        });
    }
}
class ABInsurance {
    setVehicle(vehicle) {
        this._vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('...', {
                method: "POST",
                body: JSON.stringify({ vehicle: this._vehicle })
            });
            const data = yield res.json();
            return data.true;
        });
    }
}
class InsuranceFactory {
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new TFInsurance;
    }
}
class ABInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new ABInsurance;
    }
}
const tfInsurance = new TFInsuranceFactory();
const ins = tfInsurance.createInsurance();
tfInsurance.saveHistory(ins);
const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
};
class InsuranceFactoryAlt {
    createInsurance(ins) {
        return INSURANCE_TYPE[ins];
    }
    saveHistory(ins) {
        this.db.save(ins.id, ins.status);
    }
}
const insAlt = new InsuranceFactoryAlt();
const ins2 = new (insAlt.createInsurance('tf'));
insAlt.saveHistory(ins2);
