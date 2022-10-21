const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse <T extends 'success' | "failed"> {
    code: number;
    data: T extends 'success'? string: Error;
    
    

}

const success: HTTPResponse <'success'> = {
    code:200,
    data: 'done'
}

const err: HTTPResponse <'failed'> = {
    code:200,
    data: new Error()
}

//Example
class User {
    id: number;
    name: string;
}

class UserPersistend extends User{
    dbId: string;
}

function getUser(dbId: string ): UserPersistend
function getUser(id: number): User 
function getUser(IdOrdbId: string | number): User | UserPersistend {
    if(typeof IdOrdbId === 'string'){
        return new UserPersistend();
    }else{
        return new User;
    }
}

type UserOrUserPersistend <T extends string | number> = T extends number ? User : UserPersistend;

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if(typeof id === 'number'){
        return new User() as UserOrUserPersistend<T>;
    }else{
        return new UserPersistend() as UserOrUserPersistend<T>;
    }
}

const res = getUser2(1);
const res1 = getUser2('dfsdf1')
