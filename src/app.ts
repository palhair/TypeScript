interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    users: number = 1000 ;

    @Log
    getUserInDatabase(): number {
        throw new Error('Ошибка');
    }

}


console.log(new UserServise().getUserInDatabase())

function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
):TypedPropertyDescriptor<(...args: any[]) => any> | void
{
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = () => {
        console.log('no error');
                       
    }
}