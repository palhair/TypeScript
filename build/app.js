"use strict";
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class addUserCommand extends Command {
    constructor(user, recevier, history) {
        super(history);
        this.user = user;
        this.recevier = recevier;
    }
    execute() {
        this.recevier.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.recevier.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохраняю пользователя с Id ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаляем пользователя с id ${userId}`);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addRecivier(recevier) {
        this.recevier = recevier;
    }
    run() {
        const addUser = new addUserCommand(new User(1), this.recevier, this.history);
        addUser.execute();
        console.log(addUser.history);
        addUser.undo();
        console.log(addUser.history);
    }
}
const controller = new Controller();
controller.addRecivier(new UserService());
controller.run();
