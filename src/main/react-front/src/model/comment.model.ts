import { ITask } from './task.model';

export interface IComment {
    id?: number;
    content?: string;
    task?: ITask;
}

export class Comment implements IComment {
    constructor(public id?: number, public content?: string, public task?: ITask) {}
}
