"use strict";
const a = Math.random() > 0.5 ? 1 : 0;
const success = {
    code: 200,
    data: 'done'
};
const err = {
    code: 200,
    data: new Error()
};
//Example
class User {
}
class UserPersistend extends User {
}
function getUser(IdOrdbId) {
    if (typeof IdOrdbId === 'string') {
        return new UserPersistend();
    }
    else {
        return new User;
    }
}
function getUser2(id) {
    if (typeof id === 'number') {
        return new User();
    }
    else {
        return new UserPersistend();
    }
}
const res = getUser2(1);
const res1 = getUser2('dfsdf1');
