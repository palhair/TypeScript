abstract class Controller {
    abstract handle(req: any): void; // абстрактный метод может быть только внутри абстрактного класса 

    handleWithLogs(req: any){
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}


class UserController extends Controller{
    handle(req: any): void {
        console.log(req);
    }
}

//new Controller - error
new UserController().handleWithLogs('Request');