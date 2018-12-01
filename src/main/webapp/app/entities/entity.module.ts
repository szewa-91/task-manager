import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskManagerTaskModule } from './task/task.module';
import { TaskManagerProjectModule } from './project/project.module';
import { TaskManagerCommentModule } from './comment/comment.module';
import { TaskManagerTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TaskManagerTaskModule,
        TaskManagerProjectModule,
        TaskManagerCommentModule,
        TaskManagerTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskManagerEntityModule {}
