interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

@createdAt
class UserServise implements IUserService {
    users: number = 1000 ;
    getUserInDatabase(): number {
        return this.users;
    }

}

function createdAt <T extends {new (...args: any[]):{}}> (constructor: T){
    return class extends constructor {
        createdAt: Date = new Date;
    }
}

type createdAt = {
    createdAt: Date;
}
const user = new UserServise() as IUserService & createdAt;
console.log(user.createdAt)
setTimeout(() => console.log(new UserServise()), 1000);