import * as React from "react";
import { connect } from "react-redux";
import RootModel from "src/store/rootModel";
import { Task } from "src/model/task.model";
import { fetchTasks } from "src/store/tasks/tasksActions";
import * as Modal from 'react-modal';
import TaskDetails from "src/components/tasks/TaskDetails";
import { FunctionComponent } from "react";

export class TaskList extends React.Component<TaskListProps, TaskListState> {
    public state = {
        open: false,
        task: {}
    };

    public render() {
        return <div>
            <Modal
                isOpen={this.state.open}
            >
                <TaskDetails task={this.state.task}/>
            </Modal>
            <div>
                {this.props.tasks.map(task => <TaskListItem key={task.id} task={task} onClick={this.onDetailsClicked}/>)}
            </div>
        </div>;
    }

    private onDetailsClicked = (task: Task) => {
        this.setState(() => ({ open: true, task }));
    };
}

interface TaskListProps {
    tasks: Task[]
}

interface TaskListState {
    open: boolean,
    task: Task
}

const TaskListItem: FunctionComponent<TaskListItemProps> = ({ task, onClick }) => {
    const internalOnClick = () => {
        onClick(task);
    };

    return <div key={task.id}>
        <span>{task.description}</span>
        <button onClick={internalOnClick} data-arg={task}>Show details!</button>
    </div>
};

interface TaskListItemProps {
    task: Task,
    onClick: (task: Task) => void
}

export default connect(
    (state: RootModel) => ({
        tasks: state.tasks
    }),
    dispatch => ({
        fetchTasks: dispatch(fetchTasks())
    })
)(TaskList);
