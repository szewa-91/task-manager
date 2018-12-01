import { NgModule } from '@angular/core';

import { TaskManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TaskManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TaskManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TaskManagerSharedCommonModule {}
