

interface UserFields  {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
}

type UserFields2 = {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
}
interface Role {
    roleId: number;
    name: string
}
interface userWithRole extends UserFields, Role {
    createdAd: Date
}


let user: userWithRole = {
    name: "flow",
    age: 88,
    skills: ['fff', 'eee'],
    roleId: 1,
    createdAd: new Date(),
    log(id){
        return 'dd';
    }
 
};
user.log(10);
interface UserDic {
    [index: number]: UserFields
}



