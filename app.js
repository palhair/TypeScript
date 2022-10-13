"use strict";
class Logger {
    printDate() {
        this.log(new Date().toString());
    }
}
class LofWithDate extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(mes) {
        this.printDate();
        this.log(mes);
    }
}
let obj = new LofWithDate();
obj.logWithDate('Текущая дата');
