import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'app/entities/task';
import { ITask, TaskStatus } from 'app/shared/model/task.model';
import { Subscription } from 'rxjs';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { Principal } from 'app/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-tasks',
    templateUrl: './tasks.component.html',
    styles: []
})
export class TasksComponent implements OnInit, OnDestroy {
    tasksToDo: ITask[];
    createdTasks: ITask[];
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

    moveToDone(task: ITask) {
        task.status = TaskStatus.DONE;
        this.taskService.update(task).subscribe(() => this.loadAll());
    }

    moveToToDo(task: ITask) {
        task.status = TaskStatus.TODO;
        this.taskService.update(task).subscribe(() => this.loadAll());
    }
}
