"use strict";
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: "Вася"
        };
    }
}
const user = getUser();
if (user) {
    const n55 = user.name;
}
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let c = 'cdsf';
let d = parseInt(c);
const user1 = {
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
};
const user2 = {
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
};
const user3 = {
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
};
const admin = Object.assign(Object.assign({}, user1), { role: 1 });
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
