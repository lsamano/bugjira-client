import React, { useEffect, useState } from 'react';
import Task from './Task';
import { TaskType } from '../common/types';

function Tasks() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URI + "/tasks")
            .then(resp => resp.json())
            .then(data => setTasks(data));
    }, []);

    const renderTasks = () => {
        return tasks.map(e => <Task {...e} key={e.id} />);
    };

    return (
        <div>
            <div>
                {renderTasks()}
            </div>
        </div>
    );
}

export default Tasks;