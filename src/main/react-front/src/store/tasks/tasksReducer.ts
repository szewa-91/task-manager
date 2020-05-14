import { Task } from 'src/model/task.model';

export default (state: Task[] = [], action: any) => {
    switch (action.type) {
        case 'SET_TASKS':
            return action.payload;
        case 'ADD_TASK':
            return [...state, action.payload];
        default:
            return state;
    }
};
