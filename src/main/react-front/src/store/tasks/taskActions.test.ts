import { fetchTasks } from './tasksActions';
import { TASK } from './task.fixtures';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const dispatch = jest.fn();

it('Should fetch tasks', () => {
    (mockedAxios.get as any).mockResolvedValue({ data: {} });
    return fetchTasks()(dispatch).then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: 'SET_TASKS', payload: [TASK] });
    });
});
