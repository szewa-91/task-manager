import * as React from "react";
import { Task } from "src/model/task.model";

export default ({task}: Props) => {
    return <div>
        <h2>{task.description}</h2>
    </div>;
}

interface Props {
    task: Task
}
