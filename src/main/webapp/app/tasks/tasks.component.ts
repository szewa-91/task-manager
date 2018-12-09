import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, Task } from 'app/shared/model/task.model';

@Component({
    selector: 'jhi-tasks',
    templateUrl: './tasks.component.html',
    styles: []
})
export class TasksComponent implements OnInit {
    @Input()
    tasks: ITask[];
    @Output()
    moveToDone: EventEmitter<Task> = new EventEmitter<Task>();
    @Output()
    moveToTodo: EventEmitter<Task> = new EventEmitter<Task>();
    @Output()
    moveToCreated: EventEmitter<Task> = new EventEmitter<Task>();

    constructor() {}

    ngOnInit() {}
}
