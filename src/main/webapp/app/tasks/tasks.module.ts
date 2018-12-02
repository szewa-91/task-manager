import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskService } from 'app/entities/task';
import { ProjectService } from 'app/entities/project';

@NgModule({
    imports: [CommonModule],
    providers: [TaskService, ProjectService],
    declarations: [TasksComponent],
    exports: [TasksComponent]
})
export class TasksModule {}
