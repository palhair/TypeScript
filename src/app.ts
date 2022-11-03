interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;
    handle(request: any): any;
}


abstract class  AbstractMiddleware implements IMiddleware {
    private nextMidlleware: IMiddleware;
    next(mid: IMiddleware): IMiddleware {
        this.nextMidlleware = mid;
        return this.nextMidlleware;
    }
    handle(request: any) {
       if(this.nextMidlleware){
            return this.nextMidlleware.handle(request);
       }

       return;
    }
        
}

class AuthMiddleware extends AbstractMiddleware {
    override handle(request: any) {
        console.log('AuthMiddleware');
        if(request.id == 1){
            return super.handle(request);
        }
        return{error: 'Вы не авторизованы'};
    }
}

class ValidateMiddleware extends AbstractMiddleware {
    override handle(request: any) {
        console.log('ValidateMiddleware');
        if(request.body){
            return super.handle(request);
        }
        return{error: 'Нет боди'};
    }
}
class Controller extends AbstractMiddleware {
    override handle(request: any) {
        console.log('Controller');
        
        return {success: request};
    }
}

const auth = new AuthMiddleware();
const validate = new ValidateMiddleware();
const controller = new Controller();

auth.next(validate).next(controller);

console.log (auth.handle({id: 1, body: 'TELO'}));
