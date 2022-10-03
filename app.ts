
// readonly

const skills: readonly [number, string]  = [1, 'Dev'];

const skill: readonly string[] = ['dev', "dev"];

//enum
enum StatusCode {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f'
}

const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS){

}

function action (status: StatusCode){

}

action(StatusCode.IN_PROCESS)


//1 - успех
//2 - в процессе
//3 - отклонен

const enum Roles {
    ADMIN = 1,
    USER = 2
}


const res2 = Roles.ADMIN;