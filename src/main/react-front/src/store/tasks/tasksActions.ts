import { Task } from 'src/model/task.model';
import axios, { AxiosResponse } from 'axios';

export const setTasks = (tasks: Task[]) => ({
    type: 'SET_TASKS',
    payload: tasks
});

export const addTask = (task: Task) => ({
    type: 'ADD_TASK',
    payload: task
});

export const fetchTasks: any = () => {
    return (dispatch: any) => {
        dispatch(setTasks([]));
        return axios('http://localhost:8080/api/tasks').then((response: AxiosResponse<Task[]>) => {
            dispatch(setTasks(response.data));
        });
    };
};
