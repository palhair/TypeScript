interface Mediator {
    notifi(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator){
        this.mediator = mediator;
    }
}

class Notifications {
    send(){
        console.log("Отправляю уведомление");
    }
}

class Log {
    log(message:string){
        console.log(message);
    }
}

class EventHandler extends Mediated {
    myEvent(){
        this.mediator.notifi('EventHandler', 'myEvent');
    }
}

class NotificationMediator implements Mediator{
    constructor(
        public logger: Log,
        public event: EventHandler,
        public notification: Notifications
    ){}
    notifi(sender: string, event: string): void {
        switch(event){
            case 'myEvent':
                this.notification.send();
                this.logger.log('Отправлено');
                break;
        }
    }
}

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();

const m = new NotificationMediator(logger, handler, notifications);

handler.setMediator(m);
handler.myEvent();