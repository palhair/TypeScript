interface IUserService {
    
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    private _users: number;

    
    set users(num: number){
        this._users = num;
    }
    @Log()
    get users(){
        return this._users;
    }

    
    getUserInDatabase(): number {
        throw new Error('Ошибка');
    }

}



function Log() {
    return (
        target: Object,
        _: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const set = descriptor.set;
        descriptor.set = (...args: any) => {
            console.log(args)
            set?.apply(target, args);
        }
    }
}

const userService = new UserServise();
userService.users = 1;
console.log(userService.users)