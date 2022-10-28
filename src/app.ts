interface IUserService {
    users: number;
    getUserInDatabase(): number;
}

class UserServise implements IUserService {
    users: number = 1000 ;

    @Cathes(true)
    getUserInDatabase(): number {
        throw new Error('Ошибка');
    }

}


new UserServise().getUserInDatabase()

function Cathes(rethrow: boolean = false) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ):TypedPropertyDescriptor<(...args: any[]) => any> | void =>
    {
        const oldValue = descriptor.value;
        descriptor.value = async (...args: any[]) =>{
           
                try{
                    return await oldValue?.apply(target, args);
                    
                }catch(e){
                    if (rethrow) {
                       
                        throw e;
                       
                    }else{
                        if(e instanceof Error){
                            console.log(e.message)
                        }
                    }
                }
            
        }
        
    
    }
}