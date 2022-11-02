interface IProvider {
    sendMessage(messege: string):void;
    connect(config: unknown): void;
    disconnect(): void;
}

class TelegpamProvider implements IProvider{
   
    sendMessage(messege: string): void {
        console.log(messege);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('disconnect TG');
    }
}
class WhatsUpProvider implements IProvider{
   
    sendMessage(messege: string): void {
        console.log(messege);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('disconnect WU');
    }
}

class NotificatoinSender {
    constructor(private provider: IProvider){}
    send(){
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotificatoinSender extends NotificatoinSender {
    constructor(provider: IProvider){
        super(provider);
    }
    sendDelayed(){

    }
}

let senderTG = new NotificatoinSender(new TelegpamProvider());
let senderWU = new NotificatoinSender(new WhatsUpProvider());
senderTG.send();
senderWU.send();