import { ITask } from 'app/shared/model//task.model';

export interface ITag {
    id?: number;
    name?: string;
    task?: ITask;
}

export class Tag implements ITag {
    constructor(public id?: number, public name?: string, public task?: ITask) {}
}
