class User {
    name: string;
    age: number;
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number );
    constructor(ageOrName?: string | number, age?: number){
        if(typeof ageOrName === 'string'){
            this.name = ageOrName;
        }else if(typeof ageOrName === 'string'){
            this.age = ageOrName;
        }
        if(typeof age === 'number'){
            this.age = age;
        }
    }
    
    
}

const user = new User('Nels');
const user2 = new User();
const user3 = new User( 'dfds', 32);
console.log(user3);

