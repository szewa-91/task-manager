import * as React from "react";
import { Task } from "src/model/task.model";

export default ({task, onClose}: Props) => {
    return <div>
        <span><h2>{task.description}</h2></span>
        <p>Created: {task.created}</p>
        <p>Priority: {task.priority}</p>
        <p>Status: {task.status}</p>
        <button onClick={onClose}>close</button>
    </div>;
}

interface Props {
    task: Task,
    onClose: any
}
