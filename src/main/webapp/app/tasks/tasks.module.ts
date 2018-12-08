import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskService } from 'app/entities/task';
import { ProjectService } from 'app/entities/project';
import { MaterialModule } from 'app/material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, MaterialModule],
    providers: [TaskService, ProjectService],
    declarations: [TasksComponent],
    exports: [TasksComponent]
})
export class TasksModule {}
