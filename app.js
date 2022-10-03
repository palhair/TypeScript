"use strict";
//типизация функций
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const getFullNameArrow = (firstName, surName) => {
    return `${firstName} ${surName}`;
};
const user = {
    firstName: 'Ralf',
    surName: 'Ringer',
    city: 'London',
    age: 97,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
//типизация объекта
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
// типизация массива
const skills = ['Dev', "DevOps", 'Testing'];
for (const skill of skills) {
    console.log(skill.toLocaleLowerCase());
}
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
