"use strict";
const key = 'name';
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Vasya',
    age: 30
};
const userName = getValue(user, 'name');
