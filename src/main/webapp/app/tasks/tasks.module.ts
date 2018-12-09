import { NgModule } from '@angular/core';
import { TasksSummaryComponent } from './tasks-summary.component';
import { TaskService } from 'app/entities/task';
import { ProjectService } from 'app/entities/project';
import { MaterialModule } from 'app/material/material.module';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    providers: [TaskService, ProjectService],
    declarations: [TasksSummaryComponent, TasksComponent],
    exports: [TasksSummaryComponent]
})
export class TasksModule {}
