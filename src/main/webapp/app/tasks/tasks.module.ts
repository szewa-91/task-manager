import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskService } from 'app/entities/task';
import { ProjectService } from 'app/entities/project';
import { MatButtonModule, MatGridListModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [TaskService, ProjectService],
    declarations: [TasksComponent],
    exports: [TasksComponent]
})
export class TasksModule {}
