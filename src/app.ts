interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

// @nullUser
@log()
 @setUsers(25)
// @threeUserAdvanced
//@setUserAdvanced(845)
class UserServise implements IUserService {
    users: number = 1000 ;
    getUserInDatabase(): number {
        return this.users;
    }

}

function nullUser(target: Function) {
    target.prototype.users = 0;
    
}

function setUsers (users: number){
    console.log('setUsers init');
    return (target: Function) => {
        console.log('setUsers run');
        target.prototype.users = users;
    }
}

function log (){
    console.log('log init');
    return (target: Function) => {
        console.log('log run');
    }
}

function setUserAdvanced (users: number) {
    return  <T extends { new(...args: any[]):{}} >(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }
}

function threeUserAdvanced <T extends { new(...args: any[]):{}} >(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}



console.log(new UserServise().getUserInDatabase());
