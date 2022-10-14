function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<number []>([12, 33]);

function getHalfArr<T>(data: Array<T>): Array<T> {
    const l = data.length/2;
    return data.splice(0, l);
}

getHalfArr<number>([1, 4, 22]);
getHalfArr([1, 4, "22"]);