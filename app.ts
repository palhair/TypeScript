function logId(id: string | number ): void {
    console.log(id);
}
const a = logId(1);

function multiply(a: number, b?: number){
    if (!a){
        return a * a;
    }
}

type voidFunction = () => void;

const f1 : voidFunction =() =>{

}

const f2 : voidFunction =() =>{
    return true;
}

const b = f2();

const skills =['Dev', 'DevOps'];

const user = {
    s: ['s']
}

skills.forEach((skill) => user.s.push(skill));

//unknown

let input: unknown;

input = 3;
input = {};

let res: any = input;
let res1: string = res;

function run (i: unknown){
    if(typeof i == 'number'){
        i++;
    } else {
        i;
    }
    
} 

run(input);

async function getData() {
    try {
        await fetch('')
    } catch(e) {
        if (e instanceof Error){
        console.log(e.message);
        }
    }
}

type U1 =  unknown | string;

type I1 = unknown & string;