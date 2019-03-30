import { Task } from 'src/model/task.model';

export const setTasks = (tasks: Task[]) => ({
    type: 'SET_TASKS',
    payload: tasks
});

export const addTask = (task: Task) => ({
    type: 'SET_TASK',
    payload: task
});

export const fetchTasks: any = () => {
    return (dispatch: any) => {
        dispatch(setTasks([]));
        fetch('http://localhost:8080/api/tasks')
            .then(response => response.json() as Promise<Task[]>)
            .then(tasks => {
                dispatch(setTasks(tasks));
            });
    };
};
