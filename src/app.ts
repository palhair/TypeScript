interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

//@nullUser
@threeUserAdvanced
class UserServise implements IUserService {
    users: number = 1000;
    getUserInDatabase(): number {
        return this.users;
    }

}

function nullUser(target: Function) {
    target.prototype.users = 0;
    
}

function threeUserAdvanced <T extends { new(...args: any[]):{}} >(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}



console.log(new UserServise().getUserInDatabase());
