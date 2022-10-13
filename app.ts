abstract class Logger {
    abstract log(message: string): void;
    printDate(){
        this.log(new Date().toString());
    }
}

class LofWithDate extends Logger {
    log(message){
        console.log(message);
    }

    logWithDate(mes: string){
        this.printDate();
        this.log(mes);
    }
}

let obj = new LofWithDate();
obj.logWithDate('Текущая дата');