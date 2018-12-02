import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/entities/task';
import { ProjectService } from 'app/entities/project';
import { Task } from 'app/shared/model/task.model';

@Component({
    selector: 'jhi-tasks',
    templateUrl: './tasks.component.html',
    styles: []
})
export class TasksComponent implements OnInit {
    tasks: Task[];

    constructor(taskService: TaskService, projectService: ProjectService) {}

    ngOnInit() {}
}
