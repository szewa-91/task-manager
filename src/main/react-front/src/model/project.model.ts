import { Moment } from 'moment';
import { ITask } from './task.model';

export const enum Priority {
    TOP = 'TOP',
    MEDIUM = 'MEDIUM',
    MEH = 'MEH'
}

export interface IProject {
    id?: number;
    name?: string;
    created?: Moment;
    deadlineTime?: Moment;
    priority?: Priority;
    tasks?: ITask[];
}

export class Project implements IProject {
    constructor(
        public id?: number,
        public name?: string,
        public created?: Moment,
        public deadlineTime?: Moment,
        public priority?: Priority,
        public tasks?: ITask[]
    ) {}
}
