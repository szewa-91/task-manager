import { Moment } from 'moment';
import { IComment } from 'app/shared/model//comment.model';
import { ITag } from 'app/shared/model//tag.model';
import { IProject } from 'app/shared/model//project.model';

export const enum Priority {
    TOP = 'TOP',
    MEDIUM = 'MEDIUM',
    MEH = 'MEH'
}

export const enum TaskStatus {
    CREATED = 'CREATED',
    TODO = 'TODO',
    DONE = 'DONE'
}

export interface ITask {
    id?: number;
    description?: string;
    created?: Moment;
    deadlineTime?: Moment;
    priority?: Priority;
    status?: TaskStatus;
    comments?: IComment[];
    tags?: ITag[];
    project?: IProject;
}

export class Task implements ITask {
    constructor(
        public id?: number,
        public description?: string,
        public created?: Moment,
        public deadlineTime?: Moment,
        public priority?: Priority,
        public status?: TaskStatus,
        public comments?: IComment[],
        public tags?: ITag[],
        public project?: IProject
    ) {}
}
