import { TaskStatus, Task } from '../../model/task.model';

export const TASK: Task = {
    id: 3,
    description: 'Przyjedź do tektury',
    created: undefined,
    deadlineTime: undefined,
    priority: undefined,
    status: TaskStatus.CREATED,
    comments: undefined,
    tags: undefined,
    project: undefined
};
