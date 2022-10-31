"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    console.log(`Инициализация: ${name}`);
    return function () {
        console.log(`Вызов ${name}`);
    };
}
let MyClass = class MyClass {
    constructor(_) {
    }
    method(_) { }
    method2(_) { }
};
__decorate([
    Uni('свойство'),
    __metadata("design:type", Object)
], MyClass.prototype, "props", void 0);
__decorate([
    Uni('Метод'),
    __param(0, Uni('параметр метода')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method", null);
__decorate([
    Uni('Метод Static'),
    __param(0, Uni('параметр метода Static')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method2", null);
__decorate([
    Uni('свойство Static'),
    __metadata("design:type", Object)
], MyClass, "stprops", void 0);
MyClass = __decorate([
    Uni('Класс'),
    __param(0, Uni('параметр конструктора')),
    __metadata("design:paramtypes", [Object])
], MyClass);
