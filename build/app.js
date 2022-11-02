"use strict";
class TelegpamProvider {
    sendMessage(messege) {
        console.log(messege);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('disconnect TG');
    }
}
class WhatsUpProvider {
    sendMessage(messege) {
        console.log(messege);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('disconnect WU');
    }
}
class NotificatoinSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayNotificatoinSender extends NotificatoinSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() {
    }
}
let senderTG = new NotificatoinSender(new TelegpamProvider());
let senderWU = new NotificatoinSender(new WhatsUpProvider());
senderTG.send();
senderWU.send();
