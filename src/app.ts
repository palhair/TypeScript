interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    @Max(100)
    users: number = 1000 ;

    
    getUserInDatabase(): number {
        throw new Error('Ошибка');
    }

}

const user = new UserServise()
user.users = 1;
console.log(user.users);
user.users = 101;

function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol,
    ) => {
        let value: number;
        const setter = function(newValue: number){
            if(newValue > max){
                console.log(`Больше ${max}`)
            }else{
                value = newValue;
            }
        }
        const getter = function(){
            return value;
        }
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}