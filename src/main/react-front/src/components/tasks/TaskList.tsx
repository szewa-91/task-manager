import * as React from "react";
import { connect } from "react-redux";
import RootModel from "src/store/rootModel";
import { Task } from "src/model/task.model";
import { fetchTasks } from "src/store/tasks/tasksActions";

export class TaskList extends React.Component {
    public readonly props: TaskListProps;

    public render() {
        return <div>{
            this.props.tasks.map(task => <p key={task.id}>{task.description}</p>)
        }</div>;
    }
}

interface TaskListProps {
    tasks: Task[]
}

export default connect(
    (state: RootModel) => ({
        tasks: state.tasks
    }),
    dispatch => ({
            fetchTasks: dispatch(fetchTasks())
        })
)(TaskList);
