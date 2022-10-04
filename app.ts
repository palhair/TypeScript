type User = {
    login: string;
    password?: string ;
}

const user: User = {
    login: 'log'    
}


function multiply (first: number, second?: number /* = 5* default*/): number {
    if (!second){
        return first * first;
    }
    return first * second;
    
}

type UserPro = {
    login: string;
    password?: {
        type: 'primary' | 'secodory'
    } ;
}



function testPass( user: UserPro){
    const t = user.password?.type;
}

function test (param?: string){
    const t = param ?? multiply(5);
}