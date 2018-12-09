import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'app/entities/task';
import { ITask, TaskStatus } from 'app/shared/model/task.model';
import { Subscription } from 'rxjs';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { Principal } from 'app/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-tasks-summary',
    templateUrl: './tasks-summary.component.html',
    styles: []
})
export class TasksSummaryComponent implements OnInit, OnDestroy {
    tasksToDo: ITask[];
    createdTasks: ITask[];
    doneTasks: ITask[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private taskService: TaskService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.taskService.query().subscribe(
            (res: HttpResponse<ITask[]>) => {
                const allTasks = res.body;

                this.tasksToDo = allTasks.filter(task => task.status === 'TODO');
                this.createdTasks = allTasks.filter(task => task.status === 'CREATED');
                this.doneTasks = allTasks.filter(task => task.status === 'DONE');
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInTasks();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ITask) {
        return item.id;
    }

    registerChangeInTasks() {
        this.eventSubscriber = this.eventManager.subscribe('taskListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    moveToCreated(task: ITask) {
        this.moveTask(task, TaskStatus.CREATED);
    }

    moveToTodo(task: ITask) {
        this.moveTask(task, TaskStatus.TODO);
    }

    moveToDone(task: ITask) {
        this.moveTask(task, TaskStatus.DONE);
    }

    moveTask(task: ITask, status: TaskStatus) {
        task.status = status;
        this.taskService.update(task).subscribe(() => this.loadAll());
    }
}
