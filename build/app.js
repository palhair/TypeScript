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
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(arrObj, key) {
    let groupObj = {};
    arrObj.forEach(obj => {
        let keyGroup = obj[key];
        if (Array.isArray(groupObj[keyGroup])) {
            groupObj[keyGroup].push(obj);
        }
        else {
            groupObj[keyGroup] = [obj];
        }
    });
    return groupObj;
}
let res = group(data, 'group');
function print(res) {
    for (let i in res) {
        console.log(res[i]);
    }
}
print(res);
