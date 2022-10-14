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

const split: <T> (data: Array<T>) => Array<T> = getHalfArr;
const split2: <Y> (data: Array<Y>) => Array<Y> = getHalfArr;

interface ILogLine <T> {
    timeStamp: Date;
    data: T;
}

const logLine: logLineType<{a:number, b:number}> = {
    timeStamp: new Date(),
    data: {
        a:1,
        b:3
    }
}

type logLineType<T> = {
    timeStamp: Date;
    data: T;
}