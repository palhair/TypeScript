interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    users: number = 1000;
    getUserInDatabase(): number {
        return this.users;
    }

}

function nullUser(obj: IUserService): IUserService{
    obj.users = 0;
    return obj;
}

function logUsers(obj: IUserService): IUserService{
    console.log('Users ' + obj.users);
    return obj;
}

console.log(new UserServise().getUserInDatabase());
console.log(logUsers(nullUser(new UserServise())).getUserInDatabase());
console.log(nullUser(logUsers(new UserServise())).getUserInDatabase());