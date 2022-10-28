interface IUserService {
    
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    private _users: number;
    
    getUserInDatabase(): number {
        return this._users;
    }

    setUserInDatabase(@Positive() num: number,@Positive() _: number  ): void {
       this._users = num;
    }

}



function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parametrIndex: number
    ) => {
        console.log(target);
        console.log(propertyKey);
        console.log(parametrIndex);
    }
}

const userService = new UserServise();
