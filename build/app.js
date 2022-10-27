"use strict";
class UserServise {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users ' + obj.users);
    return obj;
}
console.log(new UserServise().getUserInDatabase());
console.log(logUsers(nullUser(new UserServise())).getUserInDatabase());
console.log(nullUser(logUsers(new UserServise())).getUserInDatabase());
