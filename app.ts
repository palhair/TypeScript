const n: null = null;
const n1: any = null;


interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5){
        return null;
    }else{
        return {
            name: "Вася"
        } as User
    }
}

const user = getUser();
if(user){
    const n55 = user.name;
}

let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();

let c = 'cdsf';
let d: number = parseInt(c);

interface User {
    name: string;
    login: string;
    email: string;
}

const user1: User = {
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
}

const user2 = {
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
} as User

const user3: User = <User> {//не валидна в react
    name: "Vasya",
    email: 'fsdf@fjk.ru',
    login: 'vasia'
}

interface Admin {
    name: string;
    role: number;
}

const admin: Admin = {//чем так
    ...user1,
    role: 1
}

function userToAdmin(user: User): Admin{// лучше делать так
    return {
        name: user.name,
        role: 1
    }
}