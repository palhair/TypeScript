"use strict";
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getData(id) {
    return new User(id, 'Klod');
}
