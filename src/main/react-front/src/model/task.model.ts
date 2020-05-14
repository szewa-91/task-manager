import { Moment } from 'moment';
import { IComment } from './comment.model';
import { ITag } from './tag.model';
import { IProject } from './project.model';

export const enum Priority {
    TOP = 'Top',
    MEDIUM = 'Medium',
    MEH = 'Meh'
}

export const enum TaskStatus {
    CREATED = 'Created',
    TODO = 'To do',
    DONE = 'Done'
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
