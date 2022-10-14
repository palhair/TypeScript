"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware([12, 33]);
function getHalfArr(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getHalfArr([1, 4, 22]);
const split = getHalfArr;
const split2 = getHalfArr;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1,
        b: 3
    }
};
