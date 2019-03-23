import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'app/shared/model/task.model';

@Component({
    selector: 'jhi-task-editor',
    templateUrl: './task-editor.component.html',
    styles: []
})
export class TaskEditorComponent implements OnInit {
    @Input()
    task: Task;

    constructor() {}

    ngOnInit() {}
}
