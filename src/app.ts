class User {
    constructor(public userId: number){}
}

class CommandHistory{
    public commands: Command[] = [];
    push(command: Command){
        this.commands.push(command);
    }
    remove(command: Command){
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}

abstract class Command {
    public commandId: number;

    abstract execute(): void;

    constructor(public history: CommandHistory){
        this.commandId = Math.random();
    }
}

class addUserCommand extends Command {
    constructor(
        private user: User,
        private recevier: UserService, 
        history: CommandHistory
        ){
        super(history);
    }
    execute(): void {
        this.recevier.saveUser(this.user);
        this.history.push(this);

    }

    undo(){
        this.recevier.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

class UserService {
    saveUser(user: User){
        console.log(`Сохраняю пользователя с Id ${user.userId}`);
    }

    deleteUser(userId: number){
        console.log(`Удаляем пользователя с id ${userId}`)
    }
}

class Controller {
    recevier: UserService
    
    history: CommandHistory = new CommandHistory();
    addRecivier(recevier: UserService){
        this.recevier = recevier;
    }
    run() {
        const addUser = new addUserCommand(
            new User(1),
            this.recevier,
            this.history
        )
        addUser.execute();
        console.log(addUser.history);
        addUser.undo();
        console.log(addUser.history);
        
    }
}

const controller = new Controller();
controller.addRecivier(new UserService());
controller.run();

