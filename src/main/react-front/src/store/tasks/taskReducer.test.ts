import reducer from './tasksReducer';
import { TaskStatus } from '../../model/task.model';

const TASK = {
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
};

it('should set tasks', () => {
    expect(reducer([], { type: 'SET_TASKS', payload: [TASK] })).toEqual([TASK]);
});

it('should add task when state is empty', () => {
    expect(reducer([], { type: 'ADD_TASK', payload: TASK })).toEqual([TASK]);
});

it('should add task when state is not empty', () => {
    expect(reducer([TASK], { type: 'ADD_TASK', payload: TASK })).toEqual([TASK, TASK]);
});
