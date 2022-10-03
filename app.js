"use strict";
// readonly
const skills = [1, 'Dev'];
const skill = ['dev', "dev"];
//enum
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.IN_PROCESS);
const res2 = 1 /* Roles.ADMIN */;
