"use strict";
var _a, _b;
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
var IteratorName;
(function (IteratorName) {
    IteratorName[IteratorName["INC"] = 0] = "INC";
    IteratorName[IteratorName["DEC"] = 1] = "DEC";
})(IteratorName || (IteratorName = {}));
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
    sortDescPriority() {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }
    getTask() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator(iteratorName) {
        let iterator;
        switch (iteratorName) {
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
class PriorityTaskIterator {
    constructor(taskList) {
        this.position = 0;
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    curent() {
        return this.taskList.getTask()[this.position];
    }
    next() {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }
    previos() {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }
    index() {
        return this.position;
    }
}
class DescPriorityIterator {
    constructor(taskList) {
        this.position = 0;
        taskList.sortDescPriority();
        this.taskList = taskList;
    }
    curent() {
        return this.taskList.getTask()[this.position];
    }
    next() {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }
    previos() {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }
    index() {
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
while (iterator.curent() !== undefined) {
    console.log((_a = iterator.curent()) === null || _a === void 0 ? void 0 : _a.priority);
    iterator.next();
}
const deskIterator = taskList.getIterator(IteratorName.INC);
while (deskIterator.curent() !== undefined) {
    console.log((_b = deskIterator.curent()) === null || _b === void 0 ? void 0 : _b.priority);
    deskIterator.next();
}
