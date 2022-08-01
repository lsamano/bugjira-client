import React from 'react';
import mockData from './mockData.json';
import Task from './Task';

type Props = {

};

const TasksPage: React.FC<Props> = () => {
    const renderTasks = () => {
        return mockData.tasks.map(e => <Task {...e} />);
    }

    return (
        <div>
            {renderTasks()}
        </div>
    );
}

export default TasksPage;