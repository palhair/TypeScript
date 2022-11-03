"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMidlleware = mid;
        return this.nextMidlleware;
    }
    handle(request) {
        if (this.nextMidlleware) {
            return this.nextMidlleware.handle(request);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('AuthMiddleware');
        if (request.id == 1) {
            return super.handle(request);
        }
        return { error: 'Вы не авторизованы' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'Нет боди' };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log('Controller');
        return { success: request };
    }
}
const auth = new AuthMiddleware();
const validate = new ValidateMiddleware();
const controller = new Controller();
auth.next(validate).next(controller);
console.log(auth.handle({ id: 1, body: 'TELO' }));
