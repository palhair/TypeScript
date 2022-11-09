"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log("Отправляю уведомление");
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notifi('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    constructor(logger, event, notification) {
        this.logger = logger;
        this.event = event;
        this.notification = notification;
    }
    notifi(sender, event) {
        switch (event) {
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
