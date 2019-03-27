import { Task, TaskStatus } from 'src/model/task.model';

const initialState = [
    {
        id: 3,
        description: 'Przyjedź do tektury',
        created: undefined,
        deadlineTime: undefined,
        priority: undefined,
        status: TaskStatus.CREATED,
        user: 4,
        comments: undefined,
        tags: undefined,
        project: undefined
    },
    {
        id: 4,
        description: 'Zamów tosty',
        created: undefined,
        deadlineTime: undefined,
        priority: undefined,
        status: TaskStatus.CREATED,
        user: 4,
        comments: undefined,
        tags: undefined,
        project: undefined
    },
    {
        id: 5,
        description: 'Pogadaj z gościem znającym arabski o jakiejś mądrej książce',
        created: undefined,
        deadlineTime: undefined,
        priority: undefined,
        status: TaskStatus.CREATED,
        user: 4,
        comments: undefined,
        tags: undefined,
        project: undefined
    },
    {
        id: 6,
        description: 'Zacznij kodzić',
        created: undefined,
        deadlineTime: undefined,
        priority: undefined,
        status: TaskStatus.CREATED,
        user: 4,
        comments: undefined,
        tags: undefined,
        project: undefined
    }
];

export default (state: Task[] = initialState, action: any) => {
    return state;
};
