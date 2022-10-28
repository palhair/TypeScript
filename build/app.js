"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserServise {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        throw new Error('Ошибка');
    }
}
__decorate([
    Max(100)
], UserServise.prototype, "users", void 0);
const user = new UserServise();
user.users = 1;
console.log(user.users);
user.users = 101;
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue > max) {
                console.log(`Больше ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
