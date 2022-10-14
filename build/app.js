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
getHalfArr([1, 4, "22"]);
