import 'reflect-metadata';

interface IUserService {
    
    getUserInDatabase(): number;
}

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')
class UserServise implements IUserService {
    private _users: number;
    
    getUserInDatabase(): number {
        return this._users;
    }
    @Validate()
    setUserInDatabase(@Positive() num: number): void {
       this._users = num;
    }

}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parametrIndex: number
    ) => {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
        let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parametrIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
        
    }
}

function Validate (){
    return (
        target: Object,
        propertyKey: string ,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        let method = descriptor.value;
        descriptor.value = function(...args: any)  {
            let positivParams =  Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if(positivParams){
                for (let index of positivParams){
                    if(args[index] < 0){
                        throw new Error('Число должно быть больше нуля');
                    }
                }
            }
            return method?.apply(this, args);
        };
       

    }
}

const userService = new UserServise();
// console.log(userService.setUserInDatabase(10));
// console.log(userService.setUserInDatabase(-2));
