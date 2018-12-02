import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskManagerSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { TasksModule } from 'app/tasks/tasks.module';

@NgModule({
    imports: [TaskManagerSharedModule, RouterModule.forChild([HOME_ROUTE]), TasksModule],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskManagerHomeModule {}
