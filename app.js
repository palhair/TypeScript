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
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiply(a, b) {
    if (!a) {
        return a * a;
    }
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2();
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['s']
};
skills.forEach((skill) => user.s.push(skill));
//unknown
let input;
input = 3;
input = {};
let res = input;
let res1 = res;
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    });
}
