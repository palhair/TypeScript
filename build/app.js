"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const res = new Resp("data", 1);
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res2 = new HTTPResp();
res2.setCode(0);
