class Task {
    constructor(public priority: number) {}
}

enum IteratorName {
    INC,
    DEC
}
class TaskList {
    private tasks: Task[] = [];

    public addTask(task: Task){
        this.tasks.push(task);
    }

    public sortByPriority(){
        this.tasks.sort((a, b) => a.priority - b.priority)
    }
    public sortDescPriority(){
        this.tasks.sort((a, b) => b.priority - a.priority)
    }

    public getTask(){
        return this.tasks;
    }

    public count(){
        return this.tasks.length;
    }

    public getIterator(iteratorName: IteratorName){
        let iterator;
        switch(iteratorName){
            case IteratorName.INC:
                iterator = new PriorityTaskIterator(this);
                break;
            case IteratorName.DEC:
                iterator = new DescPriorityIterator(this);
                break;

        }
        return iterator;
    }

}

interface IIterator<T> {
    curent(): T | undefined;
    next(): T | undefined;
    previos(): T | undefined;
    index(): number;
}

class PriorityTaskIterator implements IIterator<Task> {
    private position: number = 0;
    private taskList: TaskList;

    constructor(taskList: TaskList){
        taskList.sortByPriority();
        this.taskList = taskList;
    }

    curent(): Task | undefined {
        return this.taskList.getTask()[this.position];
    }
    next(): Task | undefined {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }
    previos(): Task | undefined {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }
    index(): number {
        return this.position;
    }

}
class DescPriorityIterator implements IIterator<Task> {
    private position: number = 0;
    private taskList: TaskList;

    constructor(taskList: TaskList){
        taskList.sortDescPriority();
        this.taskList = taskList;
    }

    curent(): Task | undefined {
        return this.taskList.getTask()[this.position];
    }
    next(): Task | undefined {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }
    previos(): Task | undefined {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }
    index(): number {
        return this.position;
    }

}

const taskList = new TaskList();
taskList.addTask(new Task(1));
taskList.addTask(new Task(4));
taskList.addTask(new Task(7));
taskList.addTask(new Task(3));
taskList.addTask(new Task(19));
taskList.addTask(new Task(45));
taskList.addTask(new Task(22));

const iterator = taskList.getIterator(IteratorName.DEC);

while(iterator.curent() !== undefined ){
    console.log(iterator.curent()?.priority);
    iterator.next();
}

const deskIterator = taskList.getIterator(IteratorName.INC);

while(deskIterator.curent() !== undefined ){
    console.log(deskIterator.curent()?.priority);
    deskIterator.next();
}